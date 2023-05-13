import cv2
import pickle

# width, height = 120, 70
width, height = 120, 70
try:
    with open('CarParkPos', 'rb') as f:
        posList = pickle.load(f)
except:
    posList = []


def mouseClick(events, x, y, flags, params):
    if events == cv2.EVENT_LBUTTONDOWN:
        posList.append((x, y))
    if events == cv2.EVENT_RBUTTONDOWN:
        for i, pos in enumerate(posList):
            x1, y1 = pos
            if x1 < x < x1 + width and y1 < y < y1 + height:
                posList.pop(i)

    key = cv2.waitKey(1)
    if key == ord('d'): # Check for key press event 'd'
        posList.clear()

    with open('CarParkPos', 'wb') as f:
        pickle.dump(posList, f)


while True:
    img = cv2.imread('screenshot.png')
    for pos in posList:
        cv2.rectangle(img, pos, (pos[0] + width, pos[1] + height), (255, 0, 255), 2)

    # Add text overlay showing the number of items in the posList
    text = f"Number of items: {len(posList)}"
    cv2.putText(img, text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    cv2.imshow("Image", img)
    cv2.setMouseCallback("Image", mouseClick)

    key = cv2.waitKey(1)
    if key == ord('d'):
        posList.clear()

    with open('CarParkPos', 'wb') as f:
        pickle.dump(posList, f)