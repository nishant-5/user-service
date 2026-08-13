from pymongo import MongoClient

MONGO_URL = "mongodb://taskpad-mongodb:27017"

client = MongoClient(MONGO_URL)

db = client["taskpad"]

tasks_collection = db["tasks"]