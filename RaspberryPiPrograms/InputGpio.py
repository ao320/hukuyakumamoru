from pymongo import MongoClient
import datetime
import locale

# db接続
client = MongoClient('mongodb://160.16.222.38:22238')
db = client.hukuyakumamorukun

# collection取得
set_time = db.settingtimes

data = set_time.find()

print(data[0])