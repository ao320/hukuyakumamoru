from pymongo import MongoClient
import datetime
import locale

nowhour =  int(datetime.datetime.now().time().hour) + 1
