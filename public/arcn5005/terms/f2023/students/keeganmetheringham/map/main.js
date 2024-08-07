const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/b902e31d-0e5c-4eaa-9292-6eee54e49723/style.json?key=sXHIt1oK7CpmsTKNQgWe',
    center: [-96.81595411588849,49.77154223266254],
    zoom: 3
});
map.on('load', () => {
    // Building Marker
    map.loadImage(
        'https://th.bing.com/th/id/OIP.2rhQbkDsyXghsLaedPhXDgAAAA?pid=ImgDet&w=161&h=161&c=7',
        (error, image) => {
            if (error) throw error;
            map.addImage('building-icon', image);
      
            //Adding Buildings
            map.addSource('CanadianHighriseBuildings',{           
                 'type': 'geojson',
            'data':{
                 "type": "FeatureCollection",
                 "features":[
                 {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -79.381762,43.64878058 ]
                 },
                 "properties": {
                 "Building":"First Canadian Place",
                 "City":"Toronto",
                 "Population":"5,647,656",
                 "Province":"Ontario",
                 "Height":"298 m ",
                 "Floors":71,
                 "Built":1975,
                 "Use":"Office",
                 "Website":"https://fcpex.ca/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -73.57027907,45.49717237 ]
                 },
                 "properties": {
                 "Building":"Le 1250 Rene-Levesque",
                 "City":"Montreal",
                 "Population":"3,675,219",
                 "Province":"Quebec",
                 "Height":"199 m",
                 "Floors":47,
                 "Built":1992,
                 "Use":"Office",
                 "Website":"https://bentallgreenoakleasing.com/building/7583901489388302059/?search="
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -123.1237905,49.28575402 ]
                 },
                 "properties": {
                 "Building":"Shangri-La Hotel & Residences",
                 "City":"Vancouver",
                 "Population":"2,426,160",
                 "Province":"British Columbia",
                 "Height":"196.9 m",
                 "Floors":60,
                 "Built":2008,
                 "Use":"Mixed use",
                 "Website":"https://www.heidelbergmaterials.com/en/living-shangri-la"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -114.0658114,51.04726475 ]
                 },
                 "properties": {
                 "Building":"Brookfield Place",
                 "City":"Calgary",
                 "Population":"1,305,550",
                 "Province":"Alberta",
                 "Height":"247 m ",
                 "Floors":56,
                 "Built":2017,
                 "Use":"Office",
                 "Website":"https://www.brookfieldproperties.com/en.html"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -113.4962129,53.54482372 ]
                 },
                 "properties": {
                 "Building":"Stantec Tower & Sky Residences",
                 "City":"Edmonton",
                 "Population":"1,151,635",
                 "Province":"Alberta",
                 "Height":"250.8 m",
                 "Floors":66,
                 "Built":2019,
                 "Use":"Mixed use",
                 "Website":"https://www.stantec.com/en/projects/canada-projects/s/stantec-tower-edmonton"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -75.7076833,45.39796779 ]
                 },
                 "properties": {
                 "Building":"Claridge Icon ",
                 "City":"Ottawa-Gatineau",
                 "Population":"1,068,821",
                 "Province":"Ontario",
                 "Height":"143 m ",
                 "Floors":45,
                 "Built":2021,
                 "Use":"Residential",
                 "Website":"https://claridgehomes.com/condos/claridge-icon"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -97.13794139,49.893428 ]
                 },
                 "properties": {
                 "Building":"Three Hundred Main",
                 "City":"Winnipeg",
                 "Population":"758,515",
                 "Province":"Manitoba",
                 "Height":"142 m",
                 "Floors":40,
                 "Built":2023,
                 "Use":"Residential",
                 "Website":"https://www.300main.ca/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -71.21750255,46.80820772 ]
                 },
                 "properties": {
                 "Building":"Edifice Marie-Guyart",
                 "City":"Quebec City",
                 "Population":"733,156",
                 "Province":"Quebec",
                 "Height":"132 m ",
                 "Floors":31,
                 "Built":1972,
                 "Use":"Office",
                 "Website":"https://observatoire-capitale.com/en/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -79.86546642,43.25410213 ]
                 },
                 "properties": {
                 "Building":"Landmark Place",
                 "City":"Hamilton",
                 "Population":"729,560",
                 "Province":"Ontario",
                 "Height":"127 m ",
                 "Floors":43,
                 "Built":1974,
                 "Use":"Residential",
                 "Website":"https://www.clvgroup.com/apartments/100-main"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -80.48711334,43.45055954 ]
                 },
                 "properties": {
                 "Building":"DTK Condominiums",
                 "City":"Kitchener",
                 "Population":"522,888",
                 "Province":"Ontario",
                 "Height":"130.7 m ",
                 "Floors":39,
                 "Built":2022,
                 "Use":"Residential",
                 "Website":"https://dtkcondos.ca/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -81.24665005,42.98556755 ]
                 },
                 "properties": {
                 "Building":"One London Place",
                 "City":"London",
                 "Population":"423,369",
                 "Province":"Ontario",
                 "Height":"113.4 m ",
                 "Floors":24,
                 "Built":1992,
                 "Use":"Office",
                 "Website":"https://sifton.com/workspace/one-london-place/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -123.3629887,48.43006088 ]
                 },
                 "properties": {
                 "Building":"Hudson Place One",
                 "City":"Victoria",
                 "Population":"363,222",
                 "Province":"British Columbia",
                 "Height":"85 m",
                 "Floors":25,
                 "Built":2020,
                 "Use":"Residential",
                 "Website":"https://www.townline.com/project/hudson-place-one"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -63.5752924,44.63804797 ]
                 },
                 "properties": {
                 "Building":"The Vuze",
                 "City":"Halifax",
                 "Population":"348,634",
                 "Province":"Nova Scotia",
                 "Height":"106 m ",
                 "Floors":36,
                 "Built":1971,
                 "Use":"Residential",
                 "Website":"https://www.templetonproperties.ca/apartments-for-rent-halifax/the-vuze"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -78.90202206,43.96267484 ]
                 },
                 "properties": {
                 "Building":"U.C Tower",
                 "City":"Oshawa",
                 "Population":"335,949",
                 "Province":"Ontario",
                 "Height":"80 m",
                 "Floors":25,
                 "Built":2023,
                 "Use":"Residential",
                 "Website":"https://condoinvestments.ca/property/u-c-tower/#:~:text=The%20building%20is%2025%2Dstoreys%20tall."
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -83.03297148,42.32075257 ]
                 },
                 "properties": {
                 "Building":"Caesars Windsor Augustus Tower",
                 "City":"Windsor",
                 "Population":"306,519",
                 "Province":"Ontario",
                 "Height":"111 m",
                 "Floors":27,
                 "Built":2008,
                 "Use":"Hotel",
                 "Website":"https://www.caesars.com/caesars-windsor"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -106.6651576,52.12356114 ]
                 },
                 "properties": {
                 "Building":"Nutrien Tower",
                 "City":"Saskatoon",
                 "Population":"264,637",
                 "Province":"Saskatchewan",
                 "Height":"88.5 m",
                 "Floors":18,
                 "Built":2021,
                 "Use":"Office",
                 "Website":"https://www.nutrien.com/nutrien-tower"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -79.08314146,43.08247822 ]
                 },
                 "properties": {
                 "Building":"Niagara Falls Hilton North Tower",
                 "City":"St.Catharines-Niagara Falls",
                 "Population":"242,460",
                 "Province":"Ontario",
                 "Height":"161.9 m",
                 "Floors":53,
                 "Built":2009,
                 "Use":"Hotel",
                 "Website":"https://www.hilton.com/en/hotels/xlvnfhf-hilton-niagara-falls-fallsview-hotel-and-suites/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -104.6099596,50.44903685 ]
                 },
                 "properties": {
                 "Building":"Mosaic Potash Hill Centre Tower III",
                 "City":"Regina",
                 "Population":"224,996",
                 "Province":"Saskatchewan",
                 "Height":"81.1 m",
                 "Floors":20,
                 "Built":2013,
                 "Use":"Office",
                 "Website":"https://harvard.ca/portfolio/property-overview?property_name=mosaic-tower-at-hill-centre-iii"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -52.72423304,47.58335433 ]
                 },
                 "properties": {
                 "Building":"Confederation",
                 "City":"St. John's",
                 "Population":"185,565",
                 "Province":"Newfoundland",
                 "Height":"64 m",
                 "Floors":11,
                 "Built":1960,
                 "Use":"Capitol Building",
                 "Website":"https://www.gov.nl.ca/aboutnl/confed.html"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -119.4973775,49.89640661 ]
                 },
                 "properties": {
                 "Building":"Skye at Waterscapes",
                 "City":"Kelowna",
                 "Population":"181,380",
                 "Province":"British Columbia",
                 "Height":"83.2 m ",
                 "Floors":26,
                 "Built":2010,
                 "Use":"Residential",
                 "Website":"http://www.ledmac.com/waterscapes/about/skye-at-waterscapes"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -79.69151893,44.38237372 ]
                 },
                 "properties": {
                 "Building":"Nautica Condominiums",
                 "City":"Barrie",
                 "Population":"154,676",
                 "Province":"Ontario",
                 "Height":"56.1 m",
                 "Floors":16,
                 "Built":2010,
                 "Use":"Residential",
                 "Website":"https://nauticacommunity.ca/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -71.88719108,45.41069817 ]
                 },
                 "properties": {
                 "Building":"Cegep de Serbrooke-Pavillon",
                 "City":"Sherbrooke",
                 "Population":"151,157",
                 "Province":"Quebec",
                 "Height":"45.4 m",
                 "Floors":13,
                 "Built":1969,
                 "Use":"Residential ",
                 "Website":"https://www.cegepsherbrooke.qc.ca/fr/etudiants-inscrits/campus/plan-des-pavillons"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -80.24374795,43.54592 ]
                 },
                 "properties": {
                 "Building":"River Mill Condominiums",
                 "City":"Guelph",
                 "Population":"144,356",
                 "Province":"Ontario",
                 "Height":"68.6 m",
                 "Floors":18,
                 "Built":2015,
                 "Use":"Residential",
                 "Website":"https://www.guelphcondominiums.ca/150-wellington-street-east-river-mill.php"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -75.91747071,45.34797438 ]
                 },
                 "properties": {
                 "Building":"Brookstreet Hotel",
                 "City":"Kanata",
                 "Population":"137,118",
                 "Province":"Ontario",
                 "Height":"67.1 m",
                 "Floors":18,
                 "Built":2003,
                 "Use":"Hotel",
                 "Website":"https://www.brookstreethotel.com/?gad_source=1&gclid=Cj0KCQiA35urBhDCARIsAOU7QwmCbQpjzPjzWUDDiROLJhlN1DcAy0x-myLfbTY11l4bPhyjhFzsNTMaAvWdEALw_wcB"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -122.3150035,49.04130257 ]
                 },
                 "properties": {
                 "Building":"Mahogany at Mill Lake",
                 "City":"Abbotsford",
                 "Population":"132,300",
                 "Province":"British Columbia",
                 "Height":"79.9 m",
                 "Floors":26,
                 "Built":2018,
                 "Use":"Residential",
                 "Website":"https://livingmahogany.com/"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -72.54406711,46.34332239 ]
                 },
                 "properties": {
                 "Building":"Place Royale",
                 "City":"Trois-Rivieres",
                 "Population":"128,057",
                 "Province":"Quebec",
                 "Height":"53.7 m",
                 "Floors":15,
                 "Built":1967,
                 "Use":"Office",
                 "Website":"https://www.idetr.com/fr/recherche-de-locaux-et-terrains/f76/place-royale"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -76.53390984,44.21953472 ]
                 },
                 "properties": {
                 "Building":"1000 King West",
                 "City":"Kingston",
                 "Population":"127,943",
                 "Province":"Ontario",
                 "Height":"54.2 m",
                 "Floors":16,
                 "Built":1987,
                 "Use":"Residential",
                 "Website":"https://www.alwington.com/1000-king-street-west"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -79.88342471,43.51528702 ]
                 },
                 "properties": {
                 "Building":"100 Millside Dr",
                 "City":"Milton",
                 "Population":"124,579",
                 "Province":"Ontario",
                 "Height":"55 m",
                 "Floors":16,
                 "Built":1992,
                 "Use":"Residential",
                 "Website":"https://strata.ca/milton/100-millside-dr-village-parc-on-the-pond-condos"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -64.77686525,46.08788633 ]
                 },
                 "properties": {
                 "Building":"Place L'Assomption",
                 "City":"Moncton",
                 "Population":"119,785",
                 "Province":"New Brunswick",
                 "Height":"77.7 m",
                 "Floors":22,
                 "Built":1972,
                 "Use":"Office",
                 "Website":"https://en.wikipedia.org/wiki/Assumption_Place"
                 }
               },
               {
                 "type": "Feature",
                 "geometry": {
                    "type": "Point",
                    "coordinates":  [ -122.8000075,49.03084464 ]
                 },
                 "properties": {
                 "Building":"Soliel",
                 "City":"White Rock",
                 "Population":"109,167",
                 "Province":"British Columbia",
                 "Height":"80 m",
                 "Floors":26,
                 "Built":2024,
                 "Use":"Residential",
                 "Website":"https://www.soleilwhiterock.com/"
                 }
               }
             ]
             }
            });
  

         // Add a symbol layer for buildings
         map.addLayer({
            'id': 'buildings',
            'type': 'symbol',
            'source': 'CanadianHighriseBuildings',
            'layout': {
                'icon-image': 'building-icon',
                'icon-size': 0.4

            }
         });
        }
    )
});

         //buildings Popups
  map.on('click', 'buildings', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const building = e.features[0];


    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
                <h3>${building.properties.Building}</h3>
                <p>City: ${building.properties.City}</p>
                <p>Population: ${building.properties.Population}</p>
                <p>Province: ${building.properties.Province}</p>
                <p>Height: ${building.properties.Height}</p>
                <p>Floors: ${building.properties.Floors}</p>
                <p>Built: ${building.properties.Built}</p>
                <p>Use: ${building.properties.Use}</p>
                `)
            .addTo(map);
    });