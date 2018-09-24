# Import Dependencies
import os
import json
import firebase_admin
from pprint import pprint
from firebase_admin import credentials, firestore

# Check where are we?
dir_path = os.path.dirname(os.path.realpath(__file__))

# Load firebase database
firebase_admin.initialize_app(
    credential=credentials.Certificate(os.path.join(dir_path, "../secrets/firebase-admin-pk.json")),
    options=json.load(open(os.path.join(dir_path, "../secrets/firebase.json")))
)

db = firestore.client()

# # Create some institution
institution = db.collection("institutions").document()
institution.set({
    "name": "Random Example",
    "location": {
        "lat": 0, 
        "long": 0,
        "address": "666 EndOfWorld, Richmond Hill, ON",
        "postal_code": "P6G 4V0",
    },
    "contact_info": {
        "email": "me@me.ca", 
        "phone": "666 666 666",
        "name": "Ari S",
    },
})

# Create some activity
db.collection("activities").document().set({
    "inst_id": institution.id,
    "category": "Test",
    "sub_category": "Super Sub Test One",
    "location": {
        "lat": 0, 
        "long": 0,
        "address": "666 EndOfWorld, Richmond Hill, ON",
        "postal_code": "P6G 4V0",
    },
    "hours": { 
        "start" : { "hour": 12, "min": 45 }, 
        "end"   : { "hour": 13, "min": 45 }, 
    },
    "date": { "day": 0, "month": 0, "year": 2019 },
    "contact_info": {
        "email": "me@me.ca", 
        "phone": "666 666 666",
        "name": "Ari S",
    },
    "age_range": {
        "min": 10, "max": 12,
    },
})


# Check what institutions we have?
print("Getting First 10 Institutions")
for document in db.collection("institutions").limit(10).get():
    print("> institution.id=", document.id) 
    pprint(document.to_dict())
print("===========Done============")

# Find some institution, and get its activities
print("Getting Activities for some Institution")
[institution] = [
    inst for inst in db.collection("institutions").\
        order_by(u'name').\
        limit(1).get()
]
print(f"Getting them for {institution.id}")
for document in db.collection("activities").where(u"inst_id", "==", institution.id).get():
    print("> activity.id=", document.id)
    pprint(document.to_dict())
print("===========Done============")

