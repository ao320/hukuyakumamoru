from pymongo import MongoClient
import RPi.GPIO as GPIO
import datetime
import locale
import time as sleep

def button_9_pressed():
    morning += 1
    if morning > 6:
        morning = 0
    put_med.update_one({}, {"$set": {week[morning]+".morning": True}})
def button_11_pressed():
    afternoon += 1
    if afternoon > 6:
        afternoon = 0
    put_med.update_one({}, {"$set": {week[afternoon]+".afternoon": True}})
def button_13_pressed():
    evening += 1
    if evening > 6:
        evening = 0
    put_med.update_one({}, {"$set": {week[evening]+".evening": True}})
def button_15_pressed():
    night += 1
    if night > 6:
        night = 0
    put_med.update_one({}, {"$set": {week[night]+".night": True}})

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun

# collection取得
put_med = db.isputmedicines

# 曜日文字列取得
week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
en_day = datetime.datetime.now().strftime("%A").lower()

if en_day == "sunday":
    now = 0
elif en_day == "monday":
    now = 1
elif en_day == "tuesday":
    now = 2
elif en_day == "wednesday":
    now = 3
elif en_day == "thursday":
    now = 4
elif en_day == "friday":
    now = 5
elif en_day == "saturday":
    now = 6

morning = now
afternoon = now
evening = now
night = now

buttons = [[9, button_9_pressed],
           [11, button_11_pressed],
           [13, button_13_pressed],
           [15, button_15_pressed],]

for button in buttons:
    # ボタンがつながるGPIOピンの動作は「入力」「プルアップあり」
    GPIO.setup(button[0], GPIO.IN)
             
    # 立ち下がり（GPIO.FALLING）を検出する（プルアップなので通常時1／押下時0）
    GPIO.add_event_detect(button[0], GPIO.FALLING, bouncetime=100)
    # イベント発生時のコールバック関数を登録
    GPIO.add_event_callback(button[0], button[1])

while 1:
    sleep.sleep(0.1)