import datetime
import locale
import RPi.GPIO as GPIO
from pymongo import MongoClient
import time as sleep
import cv2
import mediapipe as mp
import urllib.request, json

def take_medicine():
    # 今の時間を取得
    now = datetime.datetime.now().time()

    # settingtimes
    st = set_time.find_one()[en_day]
    times = [datetime.time(int(st["morning"]["time"][:2]), int(st["morning"]["time"][4:5])), 
            datetime.time(int(st["afternoon"]["time"][:2]), int(st["afternoon"]["time"][4:5])),
            datetime.time(int(st["evening"]["time"][:2]), int(st["evening"]["time"][4:5])),
            datetime.time(int(st["night"]["time"][:2]), int(st["night"]["time"][4:5]))]
    
    # 前回の服薬時刻
    if now >= times[3] or times[0] > now:
        time = 3 # 前回の服薬時刻は夜
    elif times[0] < now:
        time = 0 # 前回の服薬時刻は朝
    elif times[1] < now:
        time = 1 # 前回の服薬時刻は昼
    else:
        time = 2 # 前回の服薬時刻は夕
    
    timing = ["朝", "昼", "夕方", "夜"]

    url = "https://exp.host/--/api/v2/push/send"
    method = "POST"
    headers = {
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json'
    }
    body = {
        "to": "ExponentPushToken[DAKWF0POfgYLL13JHcYPfe]",
        "title": "薬の取り出し確認",
        "body": timing[time]+"の分として排出した薬が取り出されました",
    }
    json_data = json.dumps(body).encode("utf-8")
    request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
    with urllib.request.urlopen(request) as response:
        response_body = response.read().decode("utf-8")
    
    import CameraAI

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun
set_time = db.settingtimes

# 曜日文字列取得
locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
en_day = datetime.datetime.now().strftime("%A").lower()
locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')
jp_day = datetime.datetime.now().strftime("%a").lower()
d_today =  str(datetime.date.today())

PIN = 17
# ボタンがつながるGPIOピンの動作は「入力」「プルアップあり」
GPIO.setup(PIN, GPIO.IN)
             
# 立ち下がり（GPIO.FALLING）を検出する（プルアップなので通常時1／押下時0）
GPIO.add_event_detect(PIN, GPIO.FALLING, bouncetime=10000)
# イベント発生時のコールバック関数を登録
GPIO.add_event_callback(PIN, take_medicine)

while 1:
    sleep.sleep(0.1)