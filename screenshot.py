import cv2

# Initialize the camera
cap = cv2.VideoCapture(0)

# Check if camera is opened successfully
if not cap.isOpened():
    print("Error opening video stream")

# Read and display video frames
while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Check if frame is successfully captured
    if not ret:
        print("Error capturing frame")
        break

    # Display the resulting frame
    cv2.imshow('Camera Feed', frame)

    # Wait for user input to take a screenshot
    key = cv2.waitKey(1)
    if key == ord('s'):
        # Save the screenshot
        cv2.imwrite('screenshot2.png', frame)
        print("Screenshot saved")

    # Break the loop if 'q' key is pressed
    if key == ord('q'):
        break

# Release the camera and close all windows
cap.release()
cv2.destroyAllWindows()
