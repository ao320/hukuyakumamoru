from pymongo import MongoClient
import RPi.GPIO as GPIO
import datetime
import locale
import time as sleep

def button_9_pressed():
    timing[0] += 1
    if timing[0] > 6:
        timing[0] = 0
    put_med.update_one({}, {"$set": {week[timing[0]]+".morning": True}})
def button_11_pressed():
    timing[1] += 1
    if timing[1] > 6:
        timing[1] = 0
    put_med.update_one({}, {"$set": {week[timing[1]]+".afternoon": True}})
def button_13_pressed():
    timing[2] += 1
    if timing[2] > 6:
        timing[2] = 0
    put_med.update_one({}, {"$set": {week[timing[2]]+".evening": True}})
def button_15_pressed():
    timing[3] += 1
    if timing[3] > 6:
        timing[3] = 0
    put_med.update_one({}, {"$set": {week[timing[3]]+".night": True}})

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun

# collection取得
put_med = db.isputmedicines
set_time = db.settingtimes

# 曜日文字列取得
#locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
en_day = str(datetime.datetime.now().strftime("%A").lower())
now_time = datetime.datetime.now().time()

week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
week_dic = {"sunday": 0, "monday": 1, "tuesday": 2, "wednesday": 3, "thursday": 4, "friday": 5, "saturday": 6}
timing = ["morning", "afternoon", "evening", "night"]
st = set_time.find_one()[en_day]
times = [datetime.time(int(st["morning"]["time"][:2]), int(st["morning"]["time"][4:5])), 
         datetime.time(int(st["afternoon"]["time"][:2]), int(st["afternoon"]["time"][4:5])),
         datetime.time(int(st["evening"]["time"][:2]), int(st["evening"]["time"][4:5])),
         datetime.time(int(st["night"]["time"][:2]), int(st["night"]["time"][4:5]))]

for i in range(4):
    now = week_dic[en_day]
    if now_time > times[i]:
        now += 1
    for j in range(7):
        if put_med.find_one()[week[now]][timing[i]] == False:
            break
        now += 1
        if now > 6:
            now = 0
    timing[i] = now-1

buttons = [9, 11, 13, 15]
GPIO.setmode(GPIO.BCM)
for button in buttons:
    # ボタンがつながるGPIOピンの動作は「入力」「プルアップあり」
    GPIO.setup(button, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

while 1:
    for i in range(len(buttons)):
        if GPIO.input(buttons[i]):
            eval("button_"+buttons[i]+"_pressed")()
    sleep.sleep(0.5)
