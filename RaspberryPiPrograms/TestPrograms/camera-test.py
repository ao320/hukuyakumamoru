import datetime
import cv2

cap = cv2.VideoCapture(0)

ret, frame = cap.read()

today = datetime.date.today()
time = datetime.datetime.now().time()

cv2.imwrite(f"mamorukun-pictures/{today}-{time}.jpg", frame)

cap.release()
