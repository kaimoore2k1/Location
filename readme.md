# Remember to exchange the API_KEY by your own API_KEY on line 12 in **index.js** before run

# The way to get API_KEY
    - An API key is required to access [ArcGIS services](https://developers.arcgis.com/documentation/mapping-apis-and-services/services/).
        1. Go to your [developer dashboard](https://developers.arcgis.com/dashboard/) to get an API key.
        2. Copy the key as it will be used in the next step.

# The way to get points list in map with **getCoordinatesList.html**
    1. Open **getCoordinatesList.html**
    2. Press F12 and open *Console Tab*
    3. Click everywhere in map to get a point, watch results in *Console Tab*
    4. Press "z" to delete the last point
    5. Press "Enter" to convert data to JSON, data will be displayed in **Console Tab** and deleted after press "Enter"
    6. Copy the converted data and paste it into **data.json**

# Some notes about **data.json**
    1. The structure of the data:
        - Point: 
            +   
                {
                    "name": string,
                    "description": string,
                    "geometry": {
                        "type": "point",
                        "longitude": number,
                        "latitude": number
                }
        - Polyline:
            {
                "name": string,
                "description": string,
                "geometry": {
                    "type": "polyline",
                    "paths": [
                       [longitude: number, latitude:number],
                    ]
                }
            }
        - Polygon:
            {
                "name": string,
                "description": string,
                "color"?: [red: number, green: number, blue: number, opacity: number,]
                "geometry": {
                    "type": "polygon",
                    "rings": [
                        [longitude: number, latitude:number],
                    ]
                }
            }
    2. Key "name", "description", "geometry" are always available, key "color" is only available for **Polygon**