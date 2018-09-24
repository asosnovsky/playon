# PlayON

**Live Demo**: [Demo Link](https://playon-e0713.firebaseapp.com)

In a connected city driven by data, PlayON aims to leverage the available data to help ensure low income families can have optimal access to all the free programs the city has to offer. The current version allows parents to browse a significant portion of the programs the city has to offer based on activity types. In future versions, with more data, we hope to filter activities by weekly budget and distance to better serve low income families. Not only does this program serve low income families, PlayON is also a one stop shop for parents to browse the available activities for their children.

## Methodology
The website uses the [Registered Programs and Drop In Courses Offering](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#ed9fcadf-582b-2578-e12e-7156eeeaba9b) data and the [Child & Family Programs](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#89affade-9841-653f-8bbc-dfbb397b43ac) data found on the Toronto OpenData Catalogue. We cleaned the data in Excel and changed some of the attribute names to allow the data to be read into our secured database.

## Recommendations and Future Capabilities
The datasets available provides details on the activities, but lacks consistency and some additional features that will help PlayON reach its full potential and functionality. Here are some recommendations that would make PlayON better:
- Starndardized dataset format for all dataset pertaining to children recreational programs to reduce the data clearning process. 
  - Have automated updates on regular intervals.
  - Manual data entry on a template for manual updates.
- As the number of users increase, we can use Machine Learning to leverage the user data to create an activity recommendation system for children with similar interests.
- Add latitude and longitude data for all program locations to help find closest locations for families.
  - Postal Code and address requires geocoder to interpret the geographical locations which can be expensive.
  - Latitude and Longitude data allows us to use algorithms to find the distances.
- Recreational program data should indicate if the activities have accomodations for individuals with special needs (i.e. behavioural/physical).
- Include price and gender in recreational program data to enable PlayON to allow parents to accomodate their financial needs while providing more accurate information for activities.
