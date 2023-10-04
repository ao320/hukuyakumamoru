# cronにて毎分実行

from pymongo import MongoClient
import RPi.GPIO as GPIO
import datetime
import locale
import time as sleep

# GPIOのPINを指定
GPIO.setmode(GPIO.BCM)
GPIO.setup(1, GPIO.OUT) # 朝 1
GPIO.setup(3, GPIO.OUT) # 昼 3
GPIO.setup(5, GPIO.OUT) # 夕 5
GPIO.setup(7, GPIO.OUT) # 夜 7

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun

# collection取得
set_time = db.settingtimes
put_med = db.putmedicines

# 曜日文字列取得
#locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
en_day = datetime.datetime.now().strftime("%A").lower()
locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')
jp_day = datetime.datetime.now().strftime("%a").lower()

# 今の時間を取得
now = datetime.datetime.now().time()

# settingtimes
st = set_time.find_one()[en_day]
times = [datetime.time(int(st["morning"]["time"][:2]), int(st["morning"]["time"][4:5])), 
         datetime.time(int(st["afternoon"]["time"][:2]), int(st["afternoon"]["time"][4:5])),
         datetime.time(int(st["evening"]["time"][:2]), int(st["evening"]["time"][4:5])),
         datetime.time(int(st["night"]["time"][:2]), int(st["night"]["time"][4:5]))]

# 次の服薬予定確認
if now <= times[0] or times[3] < now:
    time = 0 # つぎの服薬予定は朝
    pin = 1
elif times[0] < now:
    time = 1 # つぎの服薬予定は昼
    pin = 3
elif times[1] < now:
    time = 2 # つぎの服薬予定は夕
    pin = 5
else:
    time = 3 # つぎの服薬予定は夜
    pin = 7

if times[time].hour == now.hour and times[time].minute == now.minute:
    GPIO.output(pin, 1)
    sleep.sleep(2)
    GPIO.output(pin, 0)
    timing = ["morning", "afternoon", "evening", "night"]
    put_med.update_one({}, {"$set": {en_day+"."+timing[time]: False}})

GPIO.cleanup()