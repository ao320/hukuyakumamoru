# モジュール 事前に「pip install pymongo」が必要
from pymongo import MongoClient

# db接続
client = MongoClient('mongodb://160.16.222.38:27017')

db = client.hukuyakumamorukun
collection = db.settingtimes
print("completed connection")


settingtime = collection.find_one()
#print(settingtime[0])
print(settingtime["sunday"]["morning"])

collection.update_one({"sunday.day": "日"}, {"$set": {"sunday.morning.time": "08:00"}})

settingtime = collection.find_one()
print(settingtime["sunday"]["morning"])