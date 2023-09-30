import cv2
import mediapipe as mp
import time

mp_hands = mp.solutions.hands
mp_face_detection = mp.solutions.face_detection
hands = mp_hands.Hands()
face_detection = mp_face_detection.FaceDetection(min_detection_confidence=0.5) 

cap = cv2.VideoCapture(1)

prev_time = 0

warning_count = 0

warning_inactive = True

last_warning_time = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        continue

    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    current_time = time.time()

    results_hands = hands.process(frame_rgb)
    hand_coordinates = []
    if results_hands.multi_hand_landmarks:
        for hand_landmarks in results_hands.multi_hand_landmarks:

            for point in hand_landmarks.landmark:
                x, y = int(point.x * frame.shape[1]), int(point.y * frame.shape[0])
                hand_coordinates.append((x, y))

    if current_time - prev_time >= 1:
        prev_time = current_time

    results_face = face_detection.process(frame_rgb)

    if results_face.detections:
        for detection in results_face.detections:
            bboxC = detection.location_data.relative_bounding_box
            ih, iw, _ = frame.shape
            x, y, w, h = int(bboxC.xmin * iw), int(bboxC.ymin * ih), \
                         int(bboxC.width * iw), int(bboxC.height * ih)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    results_hands = hands.process(frame_rgb)
    if results_hands.multi_hand_landmarks:
        for hand_landmarks in results_hands.multi_hand_landmarks:

            for point in hand_landmarks.landmark:
                x, y = int(point.x * frame.shape[1]), int(point.y * frame.shape[0])
                cv2.circle(frame, (x, y), 5, (0, 0, 255), -1)

    results_face = face_detection.process(frame_rgb)
    face_coordinates = []
    if results_face.detections:
        for detection in results_face.detections:
            bboxC = detection.location_data.relative_bounding_box
            ih, iw, _ = frame.shape
            x, y, w, h = int(bboxC.xmin * iw), int(bboxC.ymin * ih), \
                         int(bboxC.width * iw), int(bboxC.height * ih)
            face_coordinates.append((x, y, w, h))

#    print("hand:", hand_coordinates)
#    print("face:", face_coordinates)
#上のコメントアウトを消せば座標表示

    for (hx, hy) in hand_coordinates:
        for (fx, fy, fw, fh) in face_coordinates:
            if fx <= hx <= fx + fw and fy <= hy <= fy + fh:
                cv2.putText(frame, "O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
                warning_count += 1
                if warning_count >= 10 and current_time - last_warning_time >= 1:
                    last_warning_time = current_time
                    print("I'm taking medicine")
                break

        if warning_inactive:
            cv2.putText(frame, "", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 0), 2)
        else:
            if warning_count >= 10:
                print("I'm taking medicine")
            else:
                warning_inactive = True

    #cv2.imshow('Hand and Face Detection', frame)

    # 'q' キーを押すとウィンドウを閉じる
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
