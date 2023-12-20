const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/470d6019-657f-4f7d-a018-6ec6ae0d0093/style.json?key=4xF6FrxAyNgBUQ4n4bUN',
    center: [-75.67950422374716,45.39769113511524],
    zoom: 11
});

//Bookstore Layer
map.on('load', () => {
    // Book Marker
    map.loadImage(
        'https://img.icons8.com/?size=256&id=453&format=png',
        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);
        
            //Adding Bookstores
            map.addSource('Books', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.80659,45.34696 ]
                     },
                     "properties": {
                     "Shop":"Coles - Bayshore Shopping Centre ",
                     "Neighbourhood":"Qualicum",
                     "Hours":"9am - 9pm",
                     "Location":"100 Bayshore Dr",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.76918,45.37329 ]
                     },
                     "properties": {
                     "Shop":"Coles - Carlingwood Shopping Centre",
                     "Neighbourhood":"Bramemar Park",
                     "Hours":"10am - 8pm",
                     "Location":"2121 Carling Ave #23",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73892445,45.35865359 ]
                     },
                     "properties": {
                     "Shop":"The Comic Book Shoppe",
                     "Neighbourhood":"City View",
                     "Hours":"9:30am - 9pm",
                     "Location":"1400 Clyde Ave",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73647752,45.35537594 ]
                     },
                     "properties": {
                     "Shop":"Book Market Inc",
                     "Neighbourhood":"City View",
                     "Hours":"10am - 4pm",
                     "Location":"1534 Merivale Rd",
                     "Rating":4.2
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.7266669,45.40221259 ]
                     },
                     "properties": {
                     "Shop":"The Spaniel's Tale",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"10am - 6pm",
                     "Location":"1131 Wellington St. West",
                     "Rating":4.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69739615,45.38342257 ]
                     },
                     "properties": {
                     "Shop":"Carleton University Bookstore",
                     "Neighbourhood":"Carleton University",
                     "Hours":"8:30am - 4:30pm",
                     "Location":"University Centre, 173 Nideyinàn",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.65592171,45.35633946 ]
                     },
                     "properties": {
                     "Shop":"Indigo",
                     "Neighbourhood":"GreenBoro",
                     "Hours":"10am  - 9pm",
                     "Location":"2210 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68987002,45.39131865 ]
                     },
                     "properties": {
                     "Shop":"Haven",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"9am - 6 pm",
                     "Location":"43 Seneca St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67886917,45.3848338 ]
                     },
                     "properties": {
                     "Shop":"Coles - Billings Bridge Shopping Centre",
                     "Neighbourhood":"Alta Vista",
                     "Hours":"10am - 8 pm",
                     "Location":"2269 Riverside Dr. Unit #33",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68344135,45.39467842 ]
                     },
                     "properties": {
                     "Shop":"Black Squirrel Books & Expresso Bar",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"9am - 5pm",
                     "Location":"1073 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68863172,45.40269306 ]
                     },
                     "properties": {
                     "Shop":"Octopus Books",
                     "Neighbourhood":"The Glebe",
                     "Hours":"10am - 6pm",
                     "Location":"116 Third Ave",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69392904,45.41267935 ]
                     },
                     "properties": {
                     "Shop":"Book Bazaar",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 5pm",
                     "Location":"417 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70002659,45.41945886 ]
                     },
                     "properties": {
                     "Shop":"The Comic Book Shoppe 2",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 6pm",
                     "Location":"128 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69069015,45.41796947 ]
                     },
                     "properties": {
                     "Shop":"Perfect Books",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 6pm",
                     "Location":"258 Elgin St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67763887,45.40805559 ]
                     },
                     "properties": {
                     "Shop":"Singing Pebble Books",
                     "Neighbourhood":"Old Ottawa East",
                     "Hours":"10am - 6pm",
                     "Location":"206 Main St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69295031,45.42521735 ]
                     },
                     "properties": {
                     "Shop":"Indigo",
                     "Neighbourhood":"Byward Market",
                     "Hours":"10 am - 9 pm",
                     "Location":"50 Rideau St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69564274,45.42899653 ]
                     },
                     "properties": {
                     "Shop":"Patrick McGahern Books",
                     "Neighbourhood":"Byward Market",
                     "Hours":"Weekends Only",
                     "Location":"11 Murray St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68451356,45.42943911 ]
                     },
                     "properties": {
                     "Shop":"All Books",
                     "Neighbourhood":"Lower Town",
                     "Hours":"1pm - 7pm",
                     "Location":"327 Rideau St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68066607,45.42764467 ]
                     },
                     "properties": {
                     "Shop":"Barely Bruised Books",
                     "Neighbourhood":"Lower Town",
                     "Hours":"11am - 7pm",
                     "Location":"315 Rue Wilbrod St 2",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67698765,45.43955947 ]
                     },
                     "properties": {
                     "Shop":"Books on Beechwood",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"10am - 5pm ",
                     "Location":"35 Beechwood Ave",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72978146,45.40070971 ]
                     },
                     "properties": {
                     "Shop":"World of Maps",
                     "Neighbourhood":"Hintonburgh",
                     "Hours":"9am - 5pm",
                     "Location":"1191 Wellington St. W",
                     "Rating":4.6
                     }
                   }
                 ]
                 }
            });
          
            // Add a symbol layer for bookstores
            map.addLayer({
                'id': 'Books',
                'type': 'symbol',
                'source': 'Books',
                'layout': {
                    'icon-image': 'custom-marker',
                    'icon-size': 0.1
                }
            });
        }
    )
  });

//Cafe Layer
map.on('load', () => {
  // Cafe Marker
  map.loadImage(
      'https://img.icons8.com/?size=256&id=101277&format=png',
      (error, image) => {
          if (error) throw error;
          map.addImage('cafe-marker', image);
          
          //Adding Cafes
          map.addSource('Cafes', {
                  'type': 'geojson',
                  'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72939312,45.34444883 ]
                     },
                     "properties": {
                     "Shop":"Second Cup Cafe",
                     "Neighbourhood":"Crestview",
                     "Hours":"7:30am - 10pm",
                     "Location":"1715 Merivale Rd",
                     "Rating":4.2
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.75371068,45.39162871 ]
                     },
                     "properties": {
                     "Shop":"Equator Coffee Westboro",
                     "Neighbourhood":"Westboro",
                     "Hours":"7am - 5pm",
                     "Location":"412 Churchill Ave N",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73291867,45.38563521 ]
                     },
                     "properties": {
                     "Shop":"Cafe 1274",
                     "Neighbourhood":"Carlington",
                     "Hours":"7am -12 pm & 5pm - 10pm",
                     "Location":"1274 Carling Ave",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73477358,45.39922097 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Coffee",
                     "Neighbourhood":"Wellington Village",
                     "Hours":"6am - 7pm",
                     "Location":"1277 Wellington St. W",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73086551,45.40222233 ]
                     },
                     "properties": {
                     "Shop":"Drip House",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"8am - 5pm",
                     "Location":"340B Parkdale Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73218016,45.39979912 ]
                     },
                     "properties": {
                     "Shop":"Second Cup Cafe",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"6am - 7pm",
                     "Location":"1235 Wellington St. W",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72369079,45.40498195 ]
                     },
                     "properties": {
                     "Shop":"The Ministry of Coffee and Social Affairs",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"7am - 5pm",
                     "Location":"1013 Wellington St. W",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72269943,45.40563254 ]
                     },
                     "properties": {
                     "Shop":"Ceaser Rosa's U-Rock Cafe",
                     "Neighbourhood":"Hintonburgh",
                     "Hours":"10am - 5pm",
                     "Location":"986 Wellington St. W",
                     "Rating":4.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71720626,45.40537979 ]
                     },
                     "properties": {
                     "Shop":"Happy Goat Coffee Co.",
                     "Neighbourhood":"Little Italy",
                     "Hours":"8am - 6pm",
                     "Location":"35 Laurel St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71855804,45.40794426 ]
                     },
                     "properties": {
                     "Shop":"Art-Is-In Bakery",
                     "Neighbourhood":"Little Italy",
                     "Hours":"9am - 3pm",
                     "Location":"250 City Centre Ave #112",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.6828047,45.3929577 ]
                     },
                     "properties": {
                     "Shop":"Oat Coutore Oatmal Cafe",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"7am - 5pm",
                     "Location":"1154 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68350265,45.39468379 ]
                     },
                     "properties": {
                     "Shop":"Black Squirrel Books & Expresso Bar",
                     "Neighbourhood":"Old Ottawa South ",
                     "Hours":"9am - 5pm",
                     "Location":"1073 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68306852,45.393915 ]
                     },
                     "properties": {
                     "Shop":"Stella Luna Gelato Cafe",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"10am - 9pm",
                     "Location":"1103 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68974916,45.39145848 ]
                     },
                     "properties": {
                     "Shop":"Haven",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"9am - 6pm",
                     "Location":"43 Seneca St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68806355,45.40274639 ]
                     },
                     "properties": {
                     "Shop":"Little Victories Coffee Roasters",
                     "Neighbourhood":"The Glebe",
                     "Hours":"7am - 6pm",
                     "Location":"801 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68882219,45.40356668 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Coffee",
                     "Neighbourhood":"The Glebe",
                     "Hours":"6:30am - 6pm",
                     "Location":"750 Bank St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68914255,45.40401628 ]
                     },
                     "properties": {
                     "Shop":"Happy Goat Coffee Co.",
                     "Neighbourhood":"The Glebe",
                     "Hours":"8am - 5pm",
                     "Location":"734 Bank St",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69287749,45.40996938 ]
                     },
                     "properties": {
                     "Shop":"Arlington Five",
                     "Neighbourhood":"Centretown",
                     "Hours":"8am - 4pm",
                     "Location":"5 Arlington Ave",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69294026,45.41714484 ]
                     },
                     "properties": {
                     "Shop":"Cafe Deluxe",
                     "Neighbourhood":"Centretown",
                     "Hours":"7am - 3pm",
                     "Location":"200 Kent St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70241148,45.41303022 ]
                     },
                     "properties": {
                     "Shop":"Art House",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 10pm",
                     "Location":"555 Somerset St W",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69742326,45.42259072 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead",
                     "Neighbourhood":"Downtown",
                     "Hours":"6am - 6pm",
                     "Location":"96 Sparks St.",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68860932,45.42604113 ]
                     },
                     "properties": {
                     "Shop":"Presse Cafe",
                     "Neighbourhood":"Byward Market",
                     "Hours":"7am - 5pm",
                     "Location":"130 Besserer St",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69339944,45.42719992 ]
                     },
                     "properties": {
                     "Shop":"Planet Coffee",
                     "Neighbourhood":"Byward Market",
                     "Hours":"7:30am - 7pm",
                     "Location":"24a York St",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69406462,45.42885642 ]
                     },
                     "properties": {
                     "Shop":"Swizzle's Cafe",
                     "Neighbourhood":"Byward Market",
                     "Hours":"7am - 6:30pm",
                     "Location":"47 Clarence St",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69451962,45.432447 ]
                     },
                     "properties": {
                     "Shop":"Ideal Cafe",
                     "Neighbourhood":"Lower Town",
                     "Hours":"8am - 5pm",
                     "Location":"176 Dalhousie St",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68438166,45.42478633 ]
                     },
                     "properties": {
                     "Shop":"Second Cup Cafe",
                     "Neighbourhood":"University of Ottawa",
                     "Hours":"7am - 8pm",
                     "Location":"153 Laurier Ave E",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.64046238,45.41031995 ]
                     },
                     "properties": {
                     "Shop":"Figaro Coffee House",
                     "Neighbourhood":"East Way Garden",
                     "Hours":"7am - 9pm",
                     "Location":"650 Industrial Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.6835106,45.42950191 ]
                     },
                     "properties": {
                     "Shop":"Egg Pops Cafe & Grill",
                     "Neighbourhood":"Lower Town",
                     "Hours":"8am - 3pm",
                     "Location":"358 Rideau St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68063351,45.42762511 ]
                     },
                     "properties": {
                     "Shop":"Happy Goat Coffee",
                     "Neighbourhood":"Sandy Hill",
                     "Hours":"8am - 7pm",
                     "Location":"317 Rue Wilbrod St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67703111,45.43963065 ]
                     },
                     "properties": {
                     "Shop":"The Scone Witch",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"8am - 4pm",
                     "Location":"35 Beechwood Ave.",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67293901,45.44168876 ]
                     },
                     "properties": {
                     "Shop":"Red Door Provisions",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"7am - 6pm",
                     "Location":"117 Beechwood Ave.",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67203263,45.44207435 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Coffee",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"6am - 8pm",
                     "Location":"131 Beechwood Ave.",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.65408372,45.43133792 ]
                     },
                     "properties": {
                     "Shop":"Zourinos Cafe",
                     "Neighbourhood":"Castle Heights",
                     "Hours":"7am - 9pm",
                     "Location":"320 McArthur Ave.",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.6954335,45.42322217 ]
                     },
                     "properties": {
                     "Shop":"Little Victories Coffee Roasters",
                     "Neighbourhood":"Downtown",
                     "Hours":"7am - 6pm",
                     "Location":"44 Elgin St",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70531213,45.40696217 ]
                     },
                     "properties": {
                     "Shop":"Oat Coutore Oatmal Cafe",
                     "Neighbourhood":"Chinatown",
                     "Hours":"7:30am - 3pm",
                     "Location":"750 Gladstone Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70543972,45.40604849 ]
                     },
                     "properties": {
                     "Shop":"Good Eats Cafe",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 9pm",
                     "Location":"207 Bell St N",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70673704,45.40686479 ]
                     },
                     "properties": {
                     "Shop":"Bello E Buono Caffè Italiano",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 3pm",
                     "Location":"777 Gladstone Ave",
                     "Rating":4.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70418528,45.40846817 ]
                     },
                     "properties": {
                     "Shop":"Besti Coffee",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 10pm",
                     "Location":"440 Bronson Ave",
                     "Rating":null
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70645414,45.41100754 ]
                     },
                     "properties": {
                     "Shop":"Drip House",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 5pm & 6pm -12am",
                     "Location":"692 Somerset St W",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71223567,45.4090932 ]
                     },
                     "properties": {
                     "Shop":"Ten Toes Coffee House & Laundry",
                     "Neighbourhood":"Little Italy",
                     "Hours":"8am - 8pm",
                     "Location":"837 Somerset St W",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71319046,45.40727944 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Roastery and Coffeehouse",
                     "Neighbourhood":"Little Italy",
                     "Hours":"6am - 7pm",
                     "Location":"130 Anderson St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.7128686,45.40647348 ]
                     },
                     "properties": {
                     "Shop":"Sanguiccio Deli-Cafe",
                     "Neighbourhood":"Little Italy",
                     "Hours":"11am - 6pm",
                     "Location":"183 Preston St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.7130188,45.40606673 ]
                     },
                     "properties": {
                     "Shop":"Cosenza bar and cafe",
                     "Neighbourhood":"Little Italy",
                     "Hours":"10am - 11pm",
                     "Location":"184 Preston St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70654391,45.39964858 ]
                     },
                     "properties": {
                     "Shop":"Morning Owl",
                     "Neighbourhood":"Little Italy",
                     "Hours":"8am - 2pm",
                     "Location":"538 Rochester St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71055401,45.40172937 ]
                     },
                     "properties": {
                     "Shop":"Carmelito Cafe",
                     "Neighbourhood":"Little Italy",
                     "Hours":"9am - 9pm",
                     "Location":"354 Preston St",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73018753,45.40193311 ]
                     },
                     "properties": {
                     "Shop":"Morning Owl",
                     "Neighbourhood":"Hintonburgh",
                     "Hours":"8am - 3pm",
                     "Location":"229 Armstrong St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69664941,45.38411663 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead",
                     "Neighbourhood":"Carleton University",
                     "Hours":"7am - 7pm",
                     "Location":"Nicol Building",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69791395,45.38338417 ]
                     },
                     "properties": {
                     "Shop":"Rooster's Coffeehouse",
                     "Neighbourhood":"Carleton University",
                     "Hours":"8am - 8pm",
                     "Location":"Nideyinàn Buildin",
                     "Rating":4.4
                    }
                  }
                ]
                }

          });
  
          // Add a symbol layer for bookstores
          map.addLayer({
              'id': 'Cafes',
              'type': 'symbol',
              'source': 'Cafes',
              'layout': {
                  'icon-image': 'cafe-marker',
                  'icon-size': 0.1
  
              }
           });
      }
  )

});

//Neighbourhood Layers

  //LowerTown
  map.on('load', () => {
    map.addSource ('Lowertown', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Lowertown",
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.69389212107194,
                  45.43573043035778
                ],
                [
                  -75.68958099793889,
                  45.430502477288826
                ],
                [
                  -75.68806760644367,
                  45.43119413119095
                ],
                [
                  -75.68587721365014,
                  45.42873203409522
                ],
                [
                  -75.6886095389022,
                  45.42749502090874
                ],
                [
                  -75.68818062424143,
                  45.4268778133017
                ],
                [
                  -75.68783192421611,
                  45.42616200490576
                ],
                [
                  -75.67388330196803,
                  45.43205437907082
                ],
                [
                  -75.67745237804895,
                  45.43631851390478
                ],
                [
                  -75.67864288417935,
                  45.43677144634631
                ],
                [
                  -75.67954981533815,
                  45.43631052064467
                ],
                [
                  -75.67978667586708,
                  45.436459801060266
                ],
                [
                  -75.6818748443656,
                  45.436272272227825
                ],
                [
                  -75.68371038224687,
                  45.436256978644224
                ],
                [
                  -75.68585326059821,
                  45.4356194482836
                ],
                [
                  -75.68648514722912,
                  45.43613809737195
                ],
                [
                  -75.68852501252618,
                  45.435274329044375
                ],
                [
                  -75.68890994529424,
                  45.43570914313156
                ],
                [
                  -75.68918580131748,
                  45.43583395034756
                ],
                [
                  -75.68953472712786,
                  45.43579240013182
                ],
                [
                  -75.69098606690936,
                  45.43519766910026
                ],
                [
                  -75.69194848054266,
                  45.43645014959216
                ],
                [
                  -75.69389212107194,
                  45.43573043035778
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 0
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Lowertown",
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.6841139952153, 45.432085631284124]
          }
        }
              ]
            }
        });

  map.addLayer({
    'id': 'lowertown-Layer',
    'type': 'fill',
    'source': 'Lowertown',
    'layout': {},
    'paint': {
            'fill-color': '#BAB86C',
            'fill-opacity': 0.2,
              },
    'filter': ['==', '$type', 'Polygon']
           });

  map.addLayer({
  'id': 'lowertown-label',
  'type': 'symbol',
  'source': 'Lowertown',
  'layout':  {
    'text-field': ['get', 'name'],
    'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
    'text-radial-offset': 0.5,
    'text-justify': 'auto',
      },
    'filter': ['==', '$type', 'Point']
  });
  
  });
  
  //The Glebe
  map.on('load', () => {
    map.addSource ('TheGlebe', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "The Glebe",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#4baf69",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.69622416954937,
                    45.39430884488522
                  ],
                  [
                    -75.69415892050297,
                    45.39412003386943
                  ],
                  [
                    -75.69134632111164,
                    45.39421167997128
                  ],
                  [
                    -75.6902538230105,
                    45.394669849950645
                  ],
                  [
                    -75.68947879917238,
                    45.39563535969319
                  ],
                  [
                    -75.68666338103816,
                    45.39635453288838
                  ],
                  [
                    -75.68326725047156,
                    45.396761526289936
                  ],
                  [
                    -75.68108225426931,
                    45.39767782118713
                  ],
                  [
                    -75.6795974606899,
                    45.400596156299855
                  ],
                  [
                    -75.68053886547523,
                    45.4018330494647
                  ],
                  [
                    -75.682072854622,
                    45.404389449347036
                  ],
                  [
                    -75.68206157965196,
                    45.406899140926186
                  ],
                  [
                    -75.68230619751628,
                    45.40902364457531
                  ],
                  [
                    -75.68420933524267,
                    45.41062221664711
                  ],
                  [
                    -75.68404798997885,
                    45.41222630918037
                  ],
                  [
                    -75.69320692073484,
                    45.408017469922015
                  ],
                  [
                    -75.6969910658612,
                    45.40676569794161
                  ],
                  [
                    -75.70205835745625,
                    45.40501215123729
                  ],
                  [
                    -75.69681393516889,
                    45.39625611393913
                  ],
                  [
                    -75.69622416954937,
                    45.39430884488522
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 1
          },
          {
            "type": "Feature",
            "properties": {
              "name": "The Glebe",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.6887970504281, 45.40341373664922] 
            }
          }
                  ]
      }
      });
  
    map.addLayer({
      'id': 'TheGlebe',
      'type': 'fill',
      'source': 'TheGlebe',
      'layout': {},
      'paint': {
              'fill-color': '#4baf69',
              'fill-opacity': 0.2,
                }
      });

      map.addLayer({
        'id': 'glebe-label',
        'type': 'symbol',
        'source': 'TheGlebe',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
        });
    });

  //Chinatown
  map.on('load', () => {
    map.addSource ('ChinaTown', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "ChinaTown",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.71631897688911,
                    45.406712623184035
                  ],
                  [
                    -75.70988274409736,
                    45.40859958574549
                  ],
                  [
                    -75.70707238910727,
                    45.40390906854037
                  ],
                  [
                    -75.70205949698783,
                    45.405015664824475
                  ],
                  [
                    -75.69934734847925,
                    45.405963845629884
                  ],
                  [
                    -75.69699163066943,
                    45.40676529291406
                  ],
                  [
                    -75.70280221017,
                    45.413706610887346
                  ],
                  [
                    -75.70618929145098,
                    45.41232219656126
                  ],
                  [
                    -75.70863193403623,
                    45.41638869519869
                  ],
                  [
                    -75.7106244931756,
                    45.413878832049335
                  ],
                  [
                    -75.71863977743101,
                    45.41053341165869
                  ],
                  [
                    -75.71631897688911,
                    45.406712623184035
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 2
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Chinatown",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.70618091433677, 45.410466823396995]
          }
        }
        ]
      }
      });
  
    map.addLayer({
      'id': 'ChinaTown',
      'type': 'fill',
      'source': 'ChinaTown',
      'layout': {},
      'paint': {
              'fill-color': '#ff5c5c',
              'fill-opacity': 0.2,
                }
         
      });

      map.addLayer({
        'id': 'chinatown-label',
        'type': 'symbol',
        'source': 'ChinaTown',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
        });
    });

  //Centretown
  map.on('load', () => {
    map.addSource ('Centretown', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "Centretown",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.70620354555305,
                    45.412333282405115
                  ],
                  [
                    -75.7028042204593,
                    45.41371181060654
                  ],
                  [
                    -75.69698946986941,
                    45.40676042783781
                  ],
                  [
                    -75.69323291251325,
                    45.40801191313622
                  ],
                  [
                    -75.68911195437667,
                    45.40987357085183
                  ],
                  [
                    -75.68404793132065,
                    45.41223158685469
                  ],
                  [
                    -75.68387895911175,
                    45.41343147050455
                  ],
                  [
                    -75.68956849229573,
                    45.42001769016332
                  ],
                  [
                    -75.69163615691633,
                    45.41917022806149
                  ],
                  [
                    -75.69494068532698,
                    45.423183044601814
                  ],
                  [
                    -75.69661075544428,
                    45.423882968072036
                  ],
                  [
                    -75.70752530947037,
                    45.41927612854769
                  ],
                  [
                    -75.70711426077634,
                    45.41868982541558
                  ],
                  [
                    -75.70895698211483,
                    45.41785822585618
                  ],
                  [
                    -75.70933826798341,
                    45.417565861260556
                  ],
                  [
                    -75.70620354555305,
                    45.412333282405115
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 3
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Centretown",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.69637912506477, 45.41486656285506]
          }
        }
        ]
      }
      });
  
    map.addLayer({
      'id': 'Centretown',
      'type': 'fill',
      'source': 'Centretown',
      'layout': {},
      'paint': {
              'fill-color': '#43adfe',
              'fill-opacity': 0.2,
                }
         
      });

    map.addLayer({
        'id': 'centretown-label',
        'type': 'symbol',
        'source': 'Centretown',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
        });
    });
  
 //Overbrook
 map.on('load', () => {
  map.addSource ('Overbrook', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "Overbrook",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.66876768080412,
                  45.43059702515393
                ],
                [
                  -75.66395003965123,
                  45.420682119512804
                ],
                [
                  -75.66106919114452,
                  45.417337836101325
                ],
                [
                  -75.65681570399003,
                  45.41772846267253
                ],
                [
                  -75.65251704292481,
                  45.41931393926242
                ],
                [
                  -75.6352322832868,
                  45.420679168925744
                ],
                [
                  -75.64204712755195,
                  45.432309831072416
                ],
                [
                  -75.66876768080412,
                  45.43059702515393
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 5
        }, 
        {
          "type": "Feature",
          "properties": {
            "name": "Overbrook",
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.65257153275758, 45.42559499401652]
        }
      }
      ]
    }
    });

  map.addLayer({
    'id': 'Overbrook',
    'type': 'fill',
    'source': 'Overbrook',
    'layout': {},
    'paint': {
            'fill-color': '#ad41e6',
            'fill-opacity': 0.2,
              }
       
    });

    map.addLayer({
      'id': 'overbrook-label',
      'type': 'symbol',
      'source': 'Overbrook',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
      });
  });

  //Eastway Garden
  map.on('load', () => {
  map.addSource ('EastwayGarden', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "EastwayGarden",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.66558586629932,
                  45.40445330437353
                ],
                [
                  -75.665444214899,
                  45.4043875323255
                ],
                [
                  -75.63820881839452,
                  45.40529463222447
                ],
                [
                  -75.63518910539007,
                  45.420692432669114
                ],
                [
                  -75.65252303515476,
                  45.41931930981846
                ],
                [
                  -75.65678072845412,
                  45.41772050032782
                ],
                [
                  -75.66397839247408,
                  45.410649113431816
                ],
                [
                  -75.66558586629932,
                  45.40445330437353
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 6
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Eastway Gardens",
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.6433860691477, 45.40980105899779] 
        }
      }
      ]
    }
    });

  map.addLayer({
    'id': 'EastwayGarden',
    'type': 'fill',
    'source': 'EastwayGarden',
    'layout': {},
    'paint': {
            'fill-color': '#d24141',
            'fill-opacity': 0.2,
              }
       
    });

  map.addLayer({
      'id': 'eastwaygarden-label',
      'type': 'symbol',
      'source': 'EastwayGarden',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
      });
  });

  //Vanier
  map.on('load', () => {
  map.addSource ('Vanier', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "Vanier",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.67288312204343,
                  45.43632535807615
                ],
                [
                  -75.67148596894828,
                  45.435500458360025
                ],
                [
                  -75.66877455832166,
                  45.4306004029111
                ],
                [
                  -75.64204945799828,
                  45.432308967527916
                ],
                [
                  -75.64689332891403,
                  45.44119943847798
                ],
                [
                  -75.65032820971142,
                  45.4403135736259
                ],
                [
                  -75.65609189839047,
                  45.44140774914982
                ],
                [
                  -75.66170258804833,
                  45.44283548739514
                ],
                [
                  -75.67288312204343,
                  45.43632535807615
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 7
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Vanier",
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.65745477889934, 45.436090917936916] 
        }
      }
      ]
    }
    });

  map.addLayer({
    'id': 'Vanier',
    'type': 'fill',
    'source': 'Vanier',
    'layout': {},
    'paint': {
            'fill-color': '#f9ba34',
            'fill-opacity': 0.2,
              }
    });

   map.addLayer({
      'id': 'vanier-label',
      'type': 'symbol',
      'source': 'Vanier',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
      });
  });

  //Alta Vista
  map.on('load', () => {
  map.addSource ('AltaVista', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "AltaVista",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.66412751259612,
                  45.36300808688458
                ],
                [
                  -75.63009101165608,
                  45.37713939682095
                ],
                [
                  -75.63810732677828,
                  45.38794614787511
                ],
                [
                  -75.63524059742926,
                  45.38970092616529
                ],
                [
                  -75.63821546489785,
                  45.40529340600918
                ],
                [
                  -75.66544131647814,
                  45.40438071087226
                ],
                [
                  -75.66918631512706,
                  45.39991400661833
                ],
                [
                  -75.67352748477161,
                  45.39228581537702
                ],
                [
                  -75.68108839132903,
                  45.38639234779441
                ],
                [
                  -75.67907632121381,
                  45.38279310388339
                ],
                [
                  -75.6812732010601,
                  45.37794736141768
                ],
                [
                  -75.67985951285601,
                  45.37768379070107
                ],
                [
                  -75.6805750018771,
                  45.37545635523509
                ],
                [
                  -75.68000869229665,
                  45.37261182690537
                ],
                [
                  -75.67498529514714,
                  45.371460379256206
                ],
                [
                  -75.66808000032132,
                  45.368212485828366
                ],
                [
                  -75.66563951289866,
                  45.36571232444152
                ],
                [
                  -75.66412751259612,
                  45.36300808688458
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 8
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Alta Vista",
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.6610740061239, 45.38754590138287]
        }
      }
      ]
    }
    });

  map.addLayer({
    'id': 'AltaVista',
    'type': 'fill',
    'source': 'AltaVista',
    'layout': {},
    'paint': {
            'fill-color': '#68c0aa',
            'fill-opacity': 0.2,
              }
    });

    map.addLayer({
      'id': 'AltaVista-label',
      'type': 'symbol',
      'source': 'AltaVista',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
      });

  });

  //New Edinburgh
 map.on('load', () => {
  map.addSource ('NewEdinburgh', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "NewEdinburgh",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.67287940384342,
                  45.43632488786264
                ],
                [
                  -75.66660518207621,
                  45.44000429430477
                ],
                [
                  -75.6714822483587,
                  45.44202003772628
                ],
                [
                  -75.67152466334822,
                  45.442451113834124
                ],
                [
                  -75.67189485990627,
                  45.44308337360428
                ],
                [
                  -75.67238665105555,
                  45.44452276498714
                ],
                [
                  -75.67509610762774,
                  45.44363551952128
                ],
                [
                  -75.68059277489165,
                  45.44412118518204
                ],
                [
                  -75.6927809267018,
                  45.444722668057466
                ],
                [
                  -75.69424551601772,
                  45.44189383856741
                ],
                [
                  -75.68376569435877,
                  45.43884066836952
                ],
                [
                  -75.68336035862274,
                  45.4394517433814
                ],
                [
                  -75.67807358958534,
                  45.438480150567216
                ],
                [
                  -75.67287940384342,
                  45.43632488786264
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 9
        },
        {
          "type": "Feature",
          "properties": {
            "name": "New Edinburgh",
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.68196193332196, 45.44253186787012]
      }
    }
      ]
    }
    });

  map.addLayer({
    'id': 'NewEdinburgh',
    'type': 'fill',
    'source': 'NewEdinburgh',
    'layout': {},
    'paint': {
            'fill-color': '#6d91c0',
            'fill-opacity': 0.2,
              }
    });

    map.addLayer({
      'id': 'NewEdinburgh-label',
      'type': 'symbol',
      'source': 'NewEdinburgh',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
      });
  });

  //Old Ottawa East
  map.on('load', () => {
  map.addSource ('OldOttawaEast', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "OldOttawaEast",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates":  [
              [
                [
                  -75.6770394419323,
                  45.39231204147481
                ],
                [
                  -75.66984952377898,
                  45.402700709190185
                ],
                [
                  -75.67071094964878,
                  45.404289784739916
                ],
                [
                  -75.67257899066773,
                  45.40684010376452
                ],
                [
                  -75.67402673749476,
                  45.41091880217974
                ],
                [
                  -75.67189785697639,
                  45.41338131631383
                ],
                [
                  -75.67641260134158,
                  45.418246710319636
                ],
                [
                  -75.67975998455701,
                  45.418069120227585
                ],
                [
                  -75.68134691960073,
                  45.41519052252241
                ],
                [
                  -75.68281605185629,
                  45.41193550221337
                ],
                [
                  -75.68090482568547,
                  45.40933475089315
                ],
                [
                  -75.68103634057485,
                  45.40714973220247
                ],
                [
                  -75.67941320714421,
                  45.40371636948663
                ],
                [
                  -75.67906996760571,
                  45.40232886126793
                ],
                [
                  -75.67799829692707,
                  45.40112572686024
                ],
                [
                  -75.67857256084667,
                  45.39890362880928
                ],
                [
                  -75.68068914844001,
                  45.39678072503716
                ],
                [
                  -75.68156128107186,
                  45.396481944855594
                ],
                [
                  -75.6770394419323,
                  45.39231204147481
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 10
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Old Ottawa East",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.67802078349264, 45.40633603610326]
                      }
        }
      ]
    }
    });

  map.addLayer({
    'id': 'OldOttawaEast',
    'type': 'fill',
    'source': 'OldOttawaEast',
    'layout': {},
    'paint': {
            'fill-color': '#8ef358',
            'fill-opacity': 0.2,
              }
    });

  map.addLayer({
      'id': 'oldottawaeast-label',
      'type': 'symbol',
      'source': 'OldOttawaEast',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
      });
  });

  //Riverside Park
  map.on('load', () => {
  map.addSource ('RiversidePark', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "RiversidePark",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.68789841835309,
                  45.361014470253366
                ],
                [
                  -75.68910881090912,
                  45.35771292209486
                ],
                [
                  -75.69245867436149,
                  45.353912042472246
                ],
                [
                  -75.69318716381207,
                  45.35141142698788
                ],
                [
                  -75.66409956976017,
                  45.36305597627174
                ],
                [
                  -75.66575334974279,
                  45.365844271025026
                ],
                [
                  -75.66803150787668,
                  45.36819668708384
                ],
                [
                  -75.6750088820501,
                  45.37142350714825
                ],
                [
                  -75.6800036352903,
                  45.37256566858295
                ],
                [
                  -75.68048227079684,
                  45.37548109531363
                ],
                [
                  -75.67969785218483,
                  45.37778223058925
                ],
                [
                  -75.68127448557702,
                  45.37786456681283
                ],
                [
                  -75.67905122835118,
                  45.382675032233294
                ],
                [
                  -75.68115413196287,
                  45.38642660913001
                ],
                [
                  -75.69124268826259,
                  45.3793895279656
                ],
                [
                  -75.69124248510607,
                  45.37712124364063
                ],
                [
                  -75.6879864723953,
                  45.36277961984081
                ],
                [
                  -75.68789841835309,
                  45.361014470253366
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 11
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Riverside Park",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.68336187155674, 45.37089100765185]
                      }
        }
      ]
    }
    });

  map.addLayer({
    'id': 'RiversidePark',
    'type': 'fill',
    'source': 'RiversidePark',
    'layout': {},
    'paint': {
            'fill-color': '#e23681',
            'fill-opacity': 0.2,
              }
    });

  map.addLayer({
      'id': 'riversidepark-label',
      'type': 'symbol',
      'source': 'RiversidePark',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });

  });

  //Carleton University
  map.on('load', () => {
  map.addSource ('CarletonUniversity', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "CarletonUniversityk",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.6963279501042,
                  45.39374193625795
                ],
                [
                  -75.69955324394601,
                  45.39161055521913
                ],
                [
                  -75.70039829439769,
                  45.390229450624076
                ],
                [
                  -75.70000991831189,
                  45.3880371715386
                ],
                [
                  -75.69903470434721,
                  45.385079662633274
                ],
                [
                  -75.6994165417231,
                  45.383564545544374
                ],
                [
                  -75.70107333105776,
                  45.38144900579377
                ],
                [
                  -75.70146576239074,
                  45.380364333431004
                ],
                [
                  -75.70133447473223,
                  45.378881519391
                ],
                [
                  -75.7008715609701,
                  45.37892711657406
                ],
                [
                  -75.6974303714912,
                  45.381416367390045
                ],
                [
                  -75.69202343990241,
                  45.383261088805256
                ],
                [
                  -75.69197090040002,
                  45.384415484236655
                ],
                [
                  -75.69028864279564,
                  45.384941655638926
                ],
                [
                  -75.68996160462189,
                  45.38512333105683
                ],
                [
                  -75.6963279501042,
                  45.39374193625795
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 12
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Carleton University",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.69613374303316, 45.386854792343904]
                      }
        }
      ]
    }
    });

  map.addLayer({
    'id': 'CarletonUniversity',
    'type': 'fill',
    'source': 'CarletonUniversity',
    'layout': {},
    'paint': {
            'fill-color': '#ffdd61',
            'fill-opacity': 0.2,
              }
    });

    map.addLayer({
      'id': 'Carletonuniversity-label',
      'type': 'symbol',
      'source': 'CarletonUniversity',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });
  });

  //Old Ottawa South
 map.on('load', () => {
  map.addSource ('OldOttawaSouth', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "OldOttawaSouth",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.69634920150588,
                  45.39373211615799
                ],
                [
                  -75.69001131081164,
                  45.3851554500493
                ],
                [
                  -75.68686939146971,
                  45.386823244461425
                ],
                [
                  -75.68665716431273,
                  45.38767127001154
                ],
                [
                  -75.68542088458844,
                  45.38847244219764
                ],
                [
                  -75.6829375202974,
                  45.38884887504932
                ],
                [
                  -75.68161673864947,
                  45.38935948960085
                ],
                [
                  -75.68053183952833,
                  45.38904581122284
                ],
                [
                  -75.67973537092453,
                  45.38883780355141
                ],
                [
                  -75.67913684532557,
                  45.38904348793207
                ],
                [
                  -75.67807318909918,
                  45.38976172997354
                ],
                [
                  -75.67702866388667,
                  45.3923068039102
                ],
                [
                  -75.68151828664357,
                  45.39646563766195
                ],
                [
                  -75.6840856656445,
                  45.39610543720778
                ],
                [
                  -75.6865983744994,
                  45.39595572121698
                ],
                [
                  -75.68839516555516,
                  45.395594409214766
                ],
                [
                  -75.68948255314918,
                  45.39427586161921
                ],
                [
                  -75.6934796034901,
                  45.39369346603155
                ],
                [
                  -75.69634920150588,
                  45.39373211615799
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Old Ottawa South",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.68348846522554, 45.39275451434864]
                      }
        }
      ]
    }
    });

  map.addLayer({
    'id': 'OldOttawaSouth',
    'type': 'fill',
    'source': 'OldOttawaSouth',
    'layout': {},
    'paint': {
            'fill-color': '#9372ee',
            'fill-opacity': 0.2,
              }
    });

  map.addLayer({
      'id': 'oldottawasouth-label',
      'type': 'symbol',
      'source': 'OldOttawaSouth',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });

  });

  //CivicHospital
 map.on('load', () => {
  map.addSource ('CivicHospital', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "CivicHospital",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.73855331194574,
                  45.38442553188244
                ],
                [
                  -75.72532700351485,
                  45.39002053617119
                ],
                [
                  -75.71009210389388,
                  45.39635896836742
                ],
                [
                  -75.71372875153142,
                  45.402459588673906
                ],
                [
                  -75.72168509109638,
                  45.400080494263364
                ],
                [
                  -75.7231332433642,
                  45.39930907417133
                ],
                [
                  -75.7270981421685,
                  45.39756973115172
                ],
                [
                  -75.72946551254256,
                  45.3952890434735
                ],
                [
                  -75.73374692880802,
                  45.390523164002275
                ],
                [
                  -75.7380780886993,
                  45.38561522121336
                ],
                [
                  -75.73855331194574,
                  45.38442553188244
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 14
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Civic Hospital",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.72145057640165, 45.39572920151753]
                      }
        }
      ]
    }
    });

  map.addLayer({
    'id': 'CivicHospital',
    'type': 'fill',
    'source': 'CivicHospital',
    'layout': {},
    'paint': {
            'fill-color': '#043ab9',
            'fill-opacity': 0.2,
              }
    });

  map.addLayer({
      'id': 'civichospital-label',
      'type': 'symbol',
      'source': 'CivicHospital',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });

  });

 //Little Italy
 map.on('load', () => {
  map.addSource ('LittleItaly', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "LittleItaly",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.71374880111091,
                  45.40248480575829
                ],
                [
                  -75.71008830134612,
                  45.39636401942974
                ],
                [
                  -75.70568343071184,
                  45.39844345876645
                ],
                [
                  -75.70870572298337,
                  45.40355452476692
                ],
                [
                  -75.71374880111091,
                  45.40248480575829
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 15
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Little Italy",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.71117384486278, 45.40590420216342]}
    }
      ]
    }
    });

  map.addLayer({
    'id': 'LittleItaly',
    'type': 'fill',
    'source': 'LittleItaly',
    'layout': {},
    'paint': {
            'fill-color': '#e861ea',
            'fill-opacity': 0.2,
              }
    });

    map.addLayer({
      'id': 'littleitaly-label',
      'type': 'symbol',
      'source': 'LittleItaly',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });
  });

  //Dalhousie
  map.on('load', () => {
  map.addSource ('Dalhousie', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "Dalhousie",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.71632262858313,
                  45.406715961607404
                ],
                [
                  -75.71373583108839,
                  45.40247741975935
                ],
                [
                  -75.70707506348269,
                  45.403909367275304
                ],
                [
                  -75.7098773228204,
                  45.40859742208994
                ],
                [
                  -75.71632262858313,
                  45.406715961607404
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 19
        },
      ]
    }
    });

  map.addLayer({
    'id': 'Dalhousie',
    'type': 'fill',
    'source': 'Dalhousie',
    'layout': {},
    'paint': {
            'fill-color': '#e861ea',
            'fill-opacity': 0.2,
              }
    });
  });

  //University of Ottawa
  map.on('load', () => {
  map.addSource ('UniversityofOttawa', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "UniversityofOttawa",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.68745753557488,
                  45.42328007374837
                ],
                [
                  -75.68643002924075,
                  45.42264581818225
                ],
                [
                  -75.68011613631596,
                  45.419378997720344
                ],
                [
                  -75.67642078736031,
                  45.418271822338795
                ],
                [
                  -75.67183751630483,
                  45.4133541714632
                ],
                [
                  -75.66909295578114,
                  45.41479736076133
                ],
                [
                  -75.66475113134888,
                  45.4153615679669
                ],
                [
                  -75.66408627054716,
                  45.41571211794124
                ],
                [
                  -75.66371409612803,
                  45.41675446655202
                ],
                [
                  -75.66437415974488,
                  45.41827105140794
                ],
                [
                  -75.66641093900998,
                  45.41906605411691
                ],
                [
                  -75.66879337619844,
                  45.42132407699373
                ],
                [
                  -75.67305956607764,
                  45.41960470395878
                ],
                [
                  -75.67375208519957,
                  45.420408874212825
                ],
                [
                  -75.6764157638894,
                  45.4192559899185
                ],
                [
                  -75.6820674472631,
                  45.42569301233948
                ],
                [
                  -75.68745753557488,
                  45.42328007374837
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 16
        },
        {
          "type": "Feature",
          "properties": {
            "name": "University of Ottawa",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.68362633495431, 45.42316888890408]
                      }
        }
      ]
    }
    });

  map.addLayer({
    'id': 'UniversityofOttawa',
    'type': 'fill',
    'source': 'UniversityofOttawa',
    'layout': {},
    'paint': {
            'fill-color': '#539cea',
            'fill-opacity': 0.2,
              }
    });

  map.addLayer({
      'id': 'UniversityofOttawa-label',
      'type': 'symbol',
      'source': 'UniversityofOttawa',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });
  });

  //The Golden Triangle
  map.on('load', () => {
  map.addSource ('TheGoldenTriangle', {
    "type": 'geojson',
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "Neighbourhood": "TheGoldenTriangle",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#ff5c5c",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  -75.69308847735253,
                  45.42093426374316
                ],
                [
                  -75.69164128494504,
                  45.419170931374055
                ],
                [
                  -75.68957180601537,
                  45.42001828729471
                ],
                [
                  -75.68389696644329,
                  45.413446346772815
                ],
                [
                  -75.68214326384317,
                  45.416486259936505
                ],
                [
                  -75.68122194326405,
                  45.41764293263972
                ],
                [
                  -75.68114149325176,
                  45.41816083458323
                ],
                [
                  -75.68130147757722,
                  45.41857206636058
                ],
                [
                  -75.6818348630059,
                  45.4190242997405
                ],
                [
                  -75.68483097886252,
                  45.42016923118973
                ],
                [
                  -75.68547560430534,
                  45.4205425816551
                ],
                [
                  -75.68593764991945,
                  45.42068202847969
                ],
                [
                  -75.68756439365389,
                  45.42129997695537
                ],
                [
                  -75.6889349163564,
                  45.42216805245741
                ],
                [
                  -75.6894908972891,
                  45.422442949588486
                ],
                [
                  -75.69308847735253,
                  45.42093426374316
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 17
        },
        {
          "type": "Feature",
          "properties": {
            "name": "The Golden Triangle",
                        },
          "geometry": {
              "type": "Point",
              "coordinates": [-75.68593481347288, 45.41831090961211]
                      }
        }
      ]
    }
    });

  map.addLayer({
    'id': 'TheGoldenTriangle',
    'type': 'fill',
    'source': 'TheGoldenTriangle',
    'layout': {},
    'paint': {
            'fill-color': '#ff9466',
            'fill-opacity': 0.2,
              }
    });
  
  map.addLayer({
      'id': 'TheGoldenTriangle-label',
      'type': 'symbol',
      'source': 'TheGoldenTriangle',
      'layout':  {
        'text-field': ['get', 'name'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });

  });

  //Hintonburgh
   map.on('load', () => {
    map.addSource ('Hintonburgh', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "Hintonburgh",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.72709523481176,
                    45.39755987042767
                  ],
                  [
                    -75.72361079049088,
                    45.39906475033254
                  ],
                  [
                    -75.72180246693648,
                    45.400006652265006
                  ],
                  [
                    -75.71789747586676,
                    45.40131837304827
                  ],
                  [
                    -75.71374283286373,
                    45.402466199432496
                  ],
                  [
                    -75.71863504599064,
                    45.41053344103278
                  ],
                  [
                    -75.7207844353126,
                    45.40969475959872
                  ],
                  [
                    -75.72300873438763,
                    45.40850662659301
                  ],
                  [
                    -75.73172147436244,
                    45.40497231284641
                  ],
                  [
                    -75.72709523481176,
                    45.39755987042767
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 20
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Hintonburgh",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.72469062851367, 45.403212779108216] 
                        }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'Hintonburgh',
      'type': 'fill',
      'source': 'Hintonburgh',
      'layout': {},
      'paint': {
              'fill-color': '#fffb80',
              'fill-opacity': 0.2,
                }
      });

      map.addLayer({
        'id': 'Hintonburgh-label',
        'type': 'symbol',
        'source': 'Hintonburgh',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

  //BywardMarket
  map.on('load', () => {
    map.addSource ('BywardMarket', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "BywardMarket",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.68743100660247,
                    45.42329633521814
                  ],
                  [
                    -75.68765131915775,
                    45.42369148418581
                  ],
                  [
                    -75.6875077490465,
                    45.42556424223753
                  ],
                  [
                    -75.68794064139911,
                    45.42634493032563
                  ],
                  [
                    -75.68818246366043,
                    45.426892688014874
                  ],
                  [
                    -75.68861097862293,
                    45.427495256624155
                  ],
                  [
                    -75.68587894362464,
                    45.428732476575306
                  ],
                  [
                    -75.68806055428966,
                    45.43117667631819
                  ],
                  [
                    -75.68958692660237,
                    45.43050175691752
                  ],
                  [
                    -75.69384798950738,
                    45.435704671137984
                  ],
                  [
                    -75.69836839763708,
                    45.433911449598924
                  ],
                  [
                    -75.69895418789379,
                    45.43382123701571
                  ],
                  [
                    -75.69940238225307,
                    45.433916419927755
                  ],
                  [
                    -75.69951477860606,
                    45.43282011133584
                  ],
                  [
                    -75.69932831323291,
                    45.4325390075841
                  ],
                  [
                    -75.69905985142377,
                    45.43205621860005
                  ],
                  [
                    -75.69817891202277,
                    45.43103343758423
                  ],
                  [
                    -75.69796857859318,
                    45.43064713716748
                  ],
                  [
                    -75.69690568742786,
                    45.42939746247865
                  ],
                  [
                    -75.69725285461271,
                    45.428720508524236
                  ],
                  [
                    -75.69400304883297,
                    45.42505137391515
                  ],
                  [
                    -75.69499120772824,
                    45.424603327301355
                  ],
                  [
                    -75.69499780786332,
                    45.42321475152812
                  ],
                  [
                    -75.69308785429558,
                    45.420934494804754
                  ],
                  [
                    -75.68743100660247,
                    45.42329633521814
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 21
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Byward Market",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.69179239540368, 45.42962812571163] 
                        }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'BywardMarket',
      'type': 'fill',
      'source': 'BywardMarket',
      'layout': {},
      'paint': {
              'fill-color': '#db4da0',
              'fill-opacity': 0.2,
                }
      });

    map.addLayer({
        'id': 'BywardMarket-label',
        'type': 'symbol',
        'source': 'BywardMarket',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

  //Westboro
  map.on('load', () => {
    map.addSource ('Westboro', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "Westboro",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.73956202968537,
                    45.38357875719561
                  ],
                  [
                    -75.7504768202542,
                    45.402444115222096
                  ],
                  [
                    -75.75851533820472,
                    45.39982548891709
                  ],
                  [
                    -75.75784700125239,
                    45.39846485679843
                  ],
                  [
                    -75.75970832177555,
                    45.3978259293136
                  ],
                  [
                    -75.75861229359153,
                    45.39620884197478
                  ],
                  [
                    -75.75984275693257,
                    45.39565742490851
                  ],
                  [
                    -75.76097317713601,
                    45.39301663770152
                  ],
                  [
                    -75.7589719314903,
                    45.38967729135837
                  ],
                  [
                    -75.75041713894737,
                    45.37451847504107
                  ],
                  [
                    -75.74854456294973,
                    45.37602633244623
                  ],
                  [
                    -75.73956202968537,
                    45.38357875719561
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 22
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Westboro",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.74934497807031, 45.3897810451926]
                        }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'Westboro',
      'type': 'fill',
      'source': 'Westboro',
      'layout': {},
      'paint': {
              'fill-color': '#5abbd3',
              'fill-opacity': 0.2,
                }
      });
    map.addLayer({
        'id': 'Westboro-label',
        'type': 'symbol',
        'source': 'Westboro',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

  //Carlington
  map.on('load', () => {
    map.addSource ('Carlington', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "Carlington",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.73987796611397,
                    45.361855360388546
                  ],
                  [
                    -75.73077526064594,
                    45.36544618604867
                  ],
                  [
                    -75.73242544536406,
                    45.373383971206124
                  ],
                  [
                    -75.72071786907578,
                    45.37870825800971
                  ],
                  [
                    -75.72700360605266,
                    45.38933691967972
                  ],
                  [
                    -75.73851635928051,
                    45.38444290890507
                  ],
                  [
                    -75.74854239303974,
                    45.37599956282355
                  ],
                  [
                    -75.73987796611397,
                    45.361855360388546
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 23
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Carlington",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.73390112627752, 45.37841527650597]
                        }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'Carlington',
      'type': 'fill',
      'source': 'Carlington',
      'layout': {},
      'paint': {
              'fill-color': '#4bb961',
              'fill-opacity': 0.2,
                }
      });
    map.addLayer({
        'id': 'Carlington-label',
        'type': 'symbol',
        'source': 'Carlington',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

  //Island Park
  map.on('load', () => {
    map.addSource ('IslandPark', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "IslandPark",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.73950543267335,
                    45.38350824892882
                  ],
                  [
                    -75.73858581044914,
                    45.38434744184869
                  ],
                  [
                    -75.73807576735405,
                    45.38561120107022
                  ],
                  [
                    -75.72917886679733,
                    45.39560603190921
                  ],
                  [
                    -75.72713886373978,
                    45.39755441137362
                  ],
                  [
                    -75.73181902449018,
                    45.404982214340066
                  ],
                  [
                    -75.74793674922599,
                    45.398082250577374
                  ],
                  [
                    -75.73950543267335,
                    45.38350824892882
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 24
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Island Park",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.73658154810907, 45.3961583698838]
                        }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'IslandPark',
      'type': 'fill',
      'source': 'IslandPark',
      'layout': {},
      'paint': {
              'fill-color': '#db3df0',
              'fill-opacity': 0.2,
                }
      });
    map.addLayer({
        'id': 'IslandPark-label',
        'type': 'symbol',
        'source': 'IslandPark',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

  //Tunney's Pasture
  map.on('load', () => {
    map.addSource ('TunneysPasture', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "TunneysPasture",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.74791867698362,
                    45.39809570429958
                  ],
                  [
                    -75.73176381383914,
                    45.40502076374469
                  ],
                  [
                    -75.72411991751875,
                    45.408045986018465
                  ],
                  [
                    -75.72873025341808,
                    45.40968157707755
                  ],
                  [
                    -75.73136328538308,
                    45.40891515118494
                  ],
                  [
                    -75.73203118153435,
                    45.40971767743309
                  ],
                  [
                    -75.73300534152438,
                    45.4094341192455
                  ],
                  [
                    -75.73347995224034,
                    45.41024749165345
                  ],
                  [
                    -75.73448870096347,
                    45.409906244172646
                  ],
                  [
                    -75.73481785240986,
                    45.410239232115686
                  ],
                  [
                    -75.73924602638147,
                    45.408854955579756
                  ],
                  [
                    -75.74041837213056,
                    45.40765667232216
                  ],
                  [
                    -75.74022558615803,
                    45.407332408303915
                  ],
                  [
                    -75.74929587588524,
                    45.40450198470975
                  ],
                  [
                    -75.74860911633988,
                    45.403373584231474
                  ],
                  [
                    -75.75044725843806,
                    45.40241234191106
                  ],
                  [
                    -75.74791867698362,
                    45.39809570429958
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 25
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Tunneys Pasture",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.73929637232614, 45.40478962970577]
                        }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'TunneysPasture',
      'type': 'fill',
      'source': 'TunneysPasture',
      'layout': {},
      'paint': {
              'fill-color': '#e87b21',
              'fill-opacity': 0.2,
                }
      });

    map.addLayer({
        'id': 'TunneysPasture-label',
        'type': 'symbol',
        'source': 'TunneysPasture',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

  //The Glebe Annex
  map.on('load', () => {
    map.addSource ('TheGlebeAnnex', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "TheGlebeAnnex",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.69634577664681,
                    45.39439593664483
                  ],
                  [
                    -75.69685006771539,
                    45.39636984857367
                  ],
                  [
                    -75.70205962408106,
                    45.405011246287756
                  ],
                  [
                    -75.70870507263129,
                    45.4035566002961
                  ],
                  [
                    -75.70564468777964,
                    45.39846214299695
                  ],
                  [
                    -75.70313618919658,
                    45.39955574942303
                  ],
                  [
                    -75.70211799447253,
                    45.398902006817224
                  ],
                  [
                    -75.70197781461682,
                    45.39837576932422
                  ],
                  [
                    -75.70007588145774,
                    45.39656080178642
                  ],
                  [
                    -75.69816341843881,
                    45.39535906978634
                  ],
                  [
                    -75.69712432645328,
                    45.394164706566926
                  ],
                  [
                    -75.69634577664681,
                    45.39439593664483
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 26
          },
          {
            "type": "Feature",
            "properties": {
              "name": "The Glebe Annex",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.70365312794614, 45.40200111858774]
                        }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'TheGlebeAnnex',
      'type': 'fill',
      'source': 'TheGlebeAnnex',
      'layout': {},
      'paint': {
              'fill-color': '#75fff6',
              'fill-opacity': 0.2,
                }
      });
    map.addLayer({
        'id': 'TheGlebeAnnex-label',
        'type': 'symbol',
        'source': 'TheGlebeAnnex',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

  //Sandy Hill
  map.on('load', () => {
    map.addSource ('SandyHill', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "SandyHill",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -75.68742696209814,
                    45.423294445931106
                  ],
                  [
                    -75.68206655578365,
                    45.425701031067405
                  ],
                  [
                    -75.6764004647373,
                    45.419258807913536
                  ],
                  [
                    -75.67373745298914,
                    45.42041966173275
                  ],
                  [
                    -75.67301188627279,
                    45.419607263929635
                  ],
                  [
                    -75.66871942033262,
                    45.4213007386673
                  ],
                  [
                    -75.66942981635513,
                    45.42427583829641
                  ],
                  [
                    -75.67008652110157,
                    45.42495029320449
                  ],
                  [
                    -75.67090370423878,
                    45.424687322008396
                  ],
                  [
                    -75.67442696102059,
                    45.4288065422715
                  ],
                  [
                    -75.67348768832665,
                    45.42926983510296
                  ],
                  [
                    -75.67248528228214,
                    45.429801218010624
                  ],
                  [
                    -75.67387701927743,
                    45.4320483490682
                  ],
                  [
                    -75.68784509650855,
                    45.42615606752122
                  ],
                  [
                    -75.6875089776814,
                    45.425563325613865
                  ],
                  [
                    -75.6876608426947,
                    45.42369593903885
                  ],
                  [
                    -75.68742696209814,
                    45.423294445931106
                  ]
                ]
              ],
              "type": "Polygon"
            },
            "id": 28
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Sandy Hill",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.67786296588508, 45.425579839893935] 
            }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'SandyHill',
      'type': 'fill',
      'source': 'SandyHill',
      'layout': {},
      'paint': {
              'fill-color': '#f0ea3d',
              'fill-opacity': 0.2,
                }
      });
    
      map.addLayer({
        'id': 'SandyHill-label',
        'type': 'symbol',
        'source': 'SandyHill',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });

//Bookstore Popups
  map.on('click', 'Books', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const bookstore = e.features[0];

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
                <h3>${bookstore.properties.Shop}</h3>
                <p>Neighbourhood: ${bookstore.properties.Neighbourhood}</p>
                <p>Hours: ${bookstore.properties.Hours}</p>
                <p>Location: ${bookstore.properties.Location}</p>
                `)
            .addTo(map);
    });

//Cafe Popups
  map.on('click', 'Cafes', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const cafe = e.features[0];
  
  
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
                <h3>${cafe.properties.Shop}</h3>
                <p>Neighbourhood: ${cafe.properties.Neighbourhood}</p>
                <p>Hours: ${cafe.properties.Hours}</p>
                <p>Location: ${cafe.properties.Location}</p>
                `)
            .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
      map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', () => {
      map.getCanvas().style.cursor = '';
   });


//Toggle between the two layers
  // After the last frame rendered before the map enters an "idle" state.
  map.on('idle', () => {
    // If these two layers were not added to the map, abort
      if (!map.getLayer('Books') 
      || !map.getLayer('Cafes')   
      ) 
      {
      return;
      }
   
    // Layer IDs
      const toggleableLayerIds = ['Books', 'Cafes'];
   
    // Set up the corresponding toggle button for each layer.
      for (const id of toggleableLayerIds) {
    // Skip layers that already have a button set up.
      if (document.getElementById(id)) 
      {
      continue;
      }

    // Create a link.
      const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active';
   
    // Show or hide layer when the toggle is clicked.
      link.onclick = function (e) {
      const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
   
     const visibility = map.getLayoutProperty(
      clickedLayer,
      'visibility'
      );
   
  // Toggle layer visibility by changing the layout object's visibility property.
    if (visibility === 'visible') {
       map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
    } else {
        this.className = 'active';
      map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
      );
      }
  };
   
  const layers = document.getElementById('menu');
  layers.appendChild(link);
  }


  });

