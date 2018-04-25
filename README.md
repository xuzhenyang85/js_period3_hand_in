
Q: Explain and demonstrate basic Geo-JSON, involving as a minimum, Points and Polygons

Svar: 
Geo-JSON er et åbent standard format for kryptering en række af geografisk data strukturer, som støtter efterføglende typer:
Point, LineString, Polygon, MultiPoint, MultiLineString, og MultiPolygon. Geometrisk objekt med ekstra properties er 
feature objekter. Sæt af features er indeholdt i FeatureCollection objekter. 

Eksampel en GeoJSON Point:
Point: 
{ "type": "Point", 
    "coordinates": [30, 10]
}

Polygon:
{ "type": "Polygon", 
    "coordinates": [
        [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
    ]
}

Q: Explain and demonstrate ways to create Geo-JSON test data

Svar: 
Link: http://geojson.io/
Man kan bruge geojson.io siden til at oprette Geo-JSON test data, via at klikke på kortet og udvælge de steder og marker som man har lyst til.
Når man har gjordt det får man Geo-JSON tilbage, og kan derefter kopier og paster ind i en js fil, som man kan bruges til ens applikation.

Q: Explain the typical order of longitude and latitude used by Server Side API’s and Client Side API’s
Server siden API's rækker er: longitude, latitude (lodret, vandret)
Client siden API's rækker er: latitude, longitude


Q: Explain and demonstrate a REST API that implements geo-features, using a relevant geo-library and plain JavaScript

Svar:
Der findes nogle funktioner til hjælpe dig med manipulation og arbejde med Geo-JSON objekter. 

Eksampel
npm install geojson-utils
var gju = require('geojson-utils');

Nu er der et objket som hedder gju, som indeholder alle hjæple funktioner. 
GeoJSON koordinater altid med rækkefølge [x,y] eller [longitude,latitude] for overholder den Open Geospatial Consortium's anbefaling. 

Eksampel kode
// center er JSON objekt fra input parameter, som er en marker og viser i koordinater
// gameArea er JSON objket, som indeholder geomatry propety, og indeholder type: Polygon, coordinate[x,y]
// return en boolean, spørg om denne marker er i området
const found = gju.pointInPolygon(center,gameArea);

// player.geometry er koordinate af hvert personer i den list
// center er JSON objekt fra input parameter, som er en marker og viser koordinater
// radius er et tal som betyder afstand fra input parameter
// returnere boolean, hvis de personer findes i den afstand, blev gemt i en array
if(gju.geometryWithinRadius(player.geometry, center, radius)){
            results.push(player);
}

// center er JSON objekt fra input parameter, som er en marker og viser i koordinater
// currentPlayer.geometry: currentPlayer er fra input parameter, som er den fundet person fra list
// returnere et objekt med distance propety, og et tal
let distance = gju.pointDistance(center, currentPlayer.geometry);


Q: Explain and demonstrate a REST API that implements geo-features, using Mongodb’s geospatial queries and indexes.


Q: Explain and demonstrate a React Native Client that uses geo-components (Location, MapView, etc.)

Q: Demonstrate both server and client-side, of the geo-related parts of your implementation of the mini project

