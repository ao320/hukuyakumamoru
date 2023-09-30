from pymongo import MongoClient
import datetime
import locale

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun

# collection取得
set_time = db.settingtimes

# 曜日文字列取得
locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
en_day = datetime.datetime.now().strftime("%A").lower()
locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')
jp_day = datetime.datetime.now().strftime("%a").lower()

# 今の時間+1取得
nowhour =  int(datetime.datetime.now().time().hour) + 1

# settingtimes
settingtimes = set_time.find_one()[en_day]
times = [settingtimes[en_day]["morning"]["time"], settingtimes[en_day]["afternoon"]["time"], settingtimes[en_day]["evening"]["time"], settingtimes[en_day]["night"]["time"]]
print(times)

