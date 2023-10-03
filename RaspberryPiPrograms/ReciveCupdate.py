import datetime
import locale
from pymongo import MongoClient

#
# カップのデータを読み取るプログラム
#

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun

# collection取得
tak_med = db.istakemedicines
cmp_num = db.completednumbers
set_time = db.settingtimes

# 曜日文字列取得
locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
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

# 前回の服薬時刻
if now >= times[3] or times[0] > now:
    time = 3 # 前回の服薬時刻は夜
elif times[1] > now:
    time = 0 # 前回の服薬時刻は朝
elif times[2] > now:
    time = 1 # 前回の服薬時刻は昼
else:
    time = 2 # 前回の服薬時刻は夕

timing = ["morning", "afternoon", "evening", "night"]

tak_med.update_one({}, {"$set": {timing[time]+".isCupComplete": True}})
d_today =  str(datetime.date.today())

if tak_med.find_one()[timing[time]]["isImageComplete"]:
    completednumbers = cmp_num.find_one({"data": d_today})
    if completednumbers == None:
        cmp_num.insert_one({"data": d_today, "completedNumber": 0})
        completednumbers = cmp_num.find_one({"data": d_today})

    completedNumber = cmp_num.find_one({"data": d_today})["completedNumber"]
    cmp_num.update_one({"data": d_today}, {"$set": {"completedNumber": completedNumber+1}})
