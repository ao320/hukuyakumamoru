from gpiozero import Gyro
import time

gyro = Gyro(17)

slow_rotation_threshold = 90
fast_rotation_threshold = 180
while True:
    angle = gyro.angle

    if angle >= slow_rotation_threshold:
        print("I'm taking medicine")

    if angle >= fast_rotation_threshold:
        print("I'm falling down")

    time.sleep(0.1)
