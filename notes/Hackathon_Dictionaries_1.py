# Import Dependencies
import os
import json
import firebase_admin
import pandas as pd
import numpy as np
import datetime
from pprint import pprint
from firebase_admin import credentials, firestore

# Load firebase database
firebase_admin.initialize_app(
    credential=credentials.Certificate("Desktop/TD HACKATHON/secrets-firebase/firebase-admin-pk.json"),
    options=json.load(open("Desktop/TD HACKATHON/secrets-firebase/firebase.json"))
)



db = firestore.client()



i = len(program)
date_1 = []
tmp_date = []
for y in range(0,i):
    j = 0
    for x in range(0,4):
        print(program['start_date1'][y])
        j = program['start_date1'][y]
        tmp_date.append(j)
    date_1.append(tmp_date)
print(date_1.head(5))




program = pd.read_csv('Desktop/TD HACKATHON/Registered_Programs_V01.csv')
location = pd.read_csv('Desktop/TD HACKATHON/physical_locations.csv')
facilities = pd.read_csv('Desktop/TD HACKATHON/physical_facilities.csv')
dropins = pd.read_csv('Desktop/TD HACKATHON/physical_dropins.csv')
i = len(program)
print(i)



for index, row in program.iterrows():
    db.collection("institutions").document(str(row["Location ID"])).set({
        "name": row["Building Name"],
        "location": {
        #"lat": row["Lat"], 
        #"long": row["Long"],
        "address": row["Address"],
        "postal_code": row["Postal Code"],
    },
    "contact_info": {
        #"email": row["email"], 
        "phone": row["Phone Number"],
        #"name": row["name"],
    },
})


# Create some activity
for index, row in program.iterrows():
    db.collection("activities").document(str(row["Course_ID"])).set({
        "inst_id": row["Location ID"],
        "category": row["Program Category"],
        "sub_category": row["Course Title"],
        "location": {
            #"lat": row["Lat"], 
            #"long": row["Long"],
            "address": row["Address"],
            "postal_code": row["Postal Code"],
        },
        "hours": { 
            "start" : { "hour": row["Start_hour1"], "min": row["Start Min"] }, 
            "end"   : { "hour": row["End_hour"], "min": row["End Min"] }, 
        },
        "date": { "day": row["Day"], "month": row["Month"], "year": row["Year"] },
        "contact_info": {
            #"email": row["email"], 
            "phone": row["Phone Number"],
           # "name": row["name"],
        },
        "age_range": {
            "min": row["min_age1"], "max": row["max_age1"],
        },
    })


#activities
#dictionaries
activities = {}

i = len(program)

for y in range(0,i):
    if program['Course_ID'][y] in activities:
        pass
    else:
        temp_dict= {}
        temp_dict['Course_ID'] = program['Course_ID'][y]
        temp_dict['inst_id'] = program['Location ID'][y]
        temp_dict['category'] = program['Program Category'][y]
        temp_dict['sub_category'] = program['Course Title'][y]
        
        temp_dict['address'] = program['Address'][y]
        temp_dict['postal_code'] = program['Postal Code'][y]

        temp_dict['start_hour'] = program['Start_hour1'][y]
        temp_dict['start_min'] = program['Start Min'][y]
        temp_dict['end_hour'] = program['End_hour'][y]
        temp_dict['end_min'] = program['End Min'][y]

        temp_dict['date_day'] = program['Day'][y]
        temp_dict['date_month'] = program['Month'][y]
        temp_dict['date_year'] = program['Year'][y]
        
        temp_dict['contact_info'] = program['Phone Number'][y]
        temp_dict['min'] = program['min_age1'][y]
        temp_dict['max'] = program['max_age1'][y]
    activities[program['Course_ID'][y]] = temp_dict

#institutions
#dictionaries
institutions = {}

i = len(program)

for y in range(0,i):
    if program['Location ID'][y] in institutions:
        pass
    else:
        temp_dict= {}
        temp_dict['name'] = program['Building Name'][y]
        temp_dict['address'] = program['Address'][y]
        temp_dict['postal_code'] = program['Postal Code'][y]
        temp_dict['contact_info'] = program['Phone Number'][y]
    institutions[program['Location ID'][y]] = temp_dict

for key, data in activities.items():
    db.collection("activities2").document(str(key)).set(data)

