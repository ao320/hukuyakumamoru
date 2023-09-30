from pymongo import MongoClient
import datetime
import locale

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun

# collection取得
set_time = db.settingtimes
cmp_num = db.completednumbers
put_med = db.isputmedicines
tak_med = db.istakemedicines

# 曜日文字列取得
locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
en_day = datetime.datetime.now().strftime("%A").lower()
locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')
jp_day = datetime.datetime.now().strftime("%a").lower()
d_today =  str(datetime.date.today())

# settingtimes
settingtimes = set_time.find_one()[en_day]
print(settingtimes)

# isputmedicines
isputmedicines = put_med.find_one()[en_day]
put_med.update_one({en_day+".day": jp_day}, {"$set": {en_day+".morning": False}})
print(isputmedicines)

# completednumbers
completednumbers = cmp_num.find_one({"data": d_today})
if completednumbers == None:
    cmp_num.insert_one({"data": d_today, "completedNumber": 0})
completednumbers = cmp_num.find_one({"data": d_today})
print(completednumbers)

# istakemedicines
istakemedicines = tak_med.find_one()
print(istakemedicines)