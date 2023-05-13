import json
import pickle
import cvzone
import cv2
import numpy as np
import time


# Video feed
cap = cv2.VideoCapture(0)

with open('CarParkPos', 'rb') as f:
    posList = pickle.load(f)

width, height = 120, 70

def checkParkingSpace(imgPro):
    availableSpaces = []
    occupiedSpaces = []

    for i, pos in enumerate(posList):
        x, y = pos

        imgCrop = imgPro[y:y + height, x:x + width]
        count = cv2.countNonZero(imgCrop)

        if count < 900:
            availableSpaces.append(i+1)
        else:
            occupiedSpaces.append(i+1)

        cv2.rectangle(img, pos, (pos[0] + width, pos[1] + height), (0, 255, 0) if count < 900 else (0, 0, 255), 5)
        cvzone.putTextRect(img, str(i+1), (x + 10, y + 10), scale=1,
                           thickness=2, offset=0, colorR=(0, 255, 0) if count < 900 else (0, 0, 255))
    
    # Write available and occupied spaces to JSON file every 5 seconds
    current_time = time.time()
    if current_time - checkParkingSpace.last_update_time >= 5:
        data = {"ParkingSpaces":{"available": availableSpaces, "occupied": occupiedSpaces}}
        with open('C:/Users/DELL user/Desktop/SE STUFF/ParkTajs/db.json', 'w') as f:
            json.dump(data, f)
        checkParkingSpace.last_update_time = current_time
    
    # Display available and occupied spaces on the screen
    cvzone.putTextRect(img, f"Available spaces: {availableSpaces}", (50, 50), scale=1,
                       thickness=2, offset=10, colorR=(0, 255, 0))
    cvzone.putTextRect(img, f"Occupied spaces: {occupiedSpaces}", (50, 100), scale=1,
                       thickness=2, offset=10, colorR=(0, 0, 255))
checkParkingSpace.last_update_time = 0

    
while True:

    if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
    success, img = cap.read()
    imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (3, 3), 1)
    imgThreshold = cv2.adaptiveThreshold(imgBlur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                         cv2.THRESH_BINARY_INV, 25, 16)
    imgMedian = cv2.medianBlur(imgThreshold, 5)
    kernel = np.ones((3, 3), np.uint8)
    imgDilate = cv2.dilate(imgMedian, kernel, iterations=1)

    checkParkingSpace(imgDilate)
    cv2.imshow("Image", img)
    # cv2.imshow("ImageBlur", imgBlur)
    # cv2.imshow("ImageThres", imgMedian)
    cv2.waitKey(10)
