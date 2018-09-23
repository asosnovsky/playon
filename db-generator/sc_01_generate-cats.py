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
activities = db.collection("activities2")

categories = {}

for act in activities.get():
    obj = act.to_dict()
    main_cat = str(obj['category']).strip()
    sub_cat = str(obj['sub_category']).strip()
    obj['category'] = main_cat
    obj['sub_category'] = sub_cat
    obj["act_id"] = str(obj['Course_ID'])
    del obj['Course_ID']

    if main_cat not in categories.keys():
        categories[main_cat] = {
            "name": main_cat,
            "sub": {}
        }
    cat_obj = categories[main_cat]
    if sub_cat not in cat_obj['sub'].keys():
       cat_obj['sub'][sub_cat] = {
           "name": sub_cat,
           "count": 0
       }
    cat_obj['sub'][sub_cat]['count'] += 1
    activities.document(act.id).set(obj)

json.dump(categories, open("./data_01_cats.json", "w"))
