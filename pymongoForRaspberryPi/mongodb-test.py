# モジュール 事前に「pip install pymongo」が必要
from pymongo import MongoClient

# db接続
client = MongoClient('mongodb://160.16.222.38:27017')

db = client.test
collection = db.test

print("completed connection")

# データ挿入 dictionary型
def insert(dictionary):
    collection.insert_one(dictionary)

# データ表示
def show():
    for data in collection.find():
        print(data)

# データ検索 検索時にはdictionary型 {key: data} の形で入力する必要がある
def search(dictionary):
    if type(dictionary) == dict:
        for data in collection.find(dictionary):
            print(data)
    else:
        print("plz dictionary type")

# データ(value)更新
def update(befor, after):
    collection.update_one(befor, {"$set":after})

    for data in collection.find(befor):
        print(data)

# データ(key)更新
def updatekey(search, rename):
    collection.update_one(search, {"$rename":rename})

    for data in collection.find(search):
        print(data)

# データ削除
def delete(dictionary):
    collection.delete_many(dictionary)

# 入力関数
def inputdict():
    key = input("key: ")
    value = input("value: ")

    return {key:value} 

# 以降 操作部

def main():
    print("---------------------------")
    while 1:
        command = input("mongodb >")
        if command == "insert":
            print("dictionary")
            insert(inputdict())

        elif command == "show":
            show()

        elif command == "search":
            print("dictionary")
            search(inputdict())

        elif command == "update":
            print("befor")
            befor = inputdict()
            print("after")
            after = inputdict()
            update(befor, after)

        elif command == "updatekey":
            print("search")
            word = inputdict()
            print("rename")
            rename = inputdict()
            updatekey(word, rename)
        
        elif command == "delete":
            print("dictionary")
            delete(inputdict())
        
        elif command == "exit":
            break

        else:
            print("unknown command")

        print("---------------------------")
            

if __name__ == '__main__':
    main()