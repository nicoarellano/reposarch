const map = new maplibregl.Map({
  container: 'map',
  style:
      'https://api.maptiler.com/maps/backdrop/style.json?key=n2UqeTpVL8iS1Gw18m9b',
  center: [-75.697797,45.383506],
  zoom: 16
});

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      // Move the camera forward
      camera.position.z -= 0.05;
      break;
    case "ArrowDown":
      // Move the camera backward
      camera.position.z += 0.05;
    case "ArrowLeft":
      // Move the camera left
      camera.position.x -= 0.05;
      break;
    case "ArrowRight":
      // Move the camera right
      camera.position.x += 0.05;
  }
});

map.on('load', () => {
  //Pokespot Marker
  map.loadImage(
      './Pokemon Sprites/pikachu.png',
      (error, image) => {
          if (error) throw error;
          map.addImage('custom-marker', image);
      
          //Adding Pokespot
          map.addSource('Pokespot', {
              'type': 'geojson',
              'data': {
                  "type": "FeatureCollection",
                  "features": [
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -75.697673,45.383787 ]
                   },
                   "properties": {
                   "Name":"David J. Azrieli Plaque",
                   "Type":"Pokespot",
                   "Location":"Architecture Bldg, Ottawa, ON K1S, Canada",
                   }
                 },
                 {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.696286,45.384652 ]
                  },
                  "properties": {
                  "Name":"Carleton University Campus Map - Central ",
                  "Type":"Pokespot",
                  "Location":"Carleton U, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697180,45.384573 ]
                  },
                  "properties": {
                  "Name":"Mackenzie Building",
                  "Type":"Pokespot",
                  "Location":"Mackenzie Building, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697082,45.385374 ]
                  },
                  "properties": {
                  "Name":"The Bell Canada Theatre in the Minto Building",
                  "Type":"Pokespot",
                  "Location":"2000, Minto Centre for Advanced Studies in Engineering, Library Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.696773,45.385259 ]
                  },
                  "properties": {
                  "Name":"The Minto Centre for Advanced Studies in Engineering",
                  "Type":"Pokespot",
                  "Location":"Minto Centre for Advanced Studies in Engineering, Library Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.696400,45.383462 ]
                  },
                  "properties": {
                  "Name":"Carleton University Health Sciences Building",
                  "Type":"Pokespot",
                  "Location":"Steacie Bldg, 1125 Colonel By Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.696451,45.382742 ]
                  },
                  "properties": {
                  "Name":"Sailing Through Time",
                  "Type":"Pokespot",
                  "Location":"River Building, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.696027,45.382698 ]
                  },
                  "properties": {
                  "Name":"Richcraft Hall",
                  "Type":"Pokespot",
                  "Location":"43 Campus Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697263,45.382191 ]
                  },
                  "properties": {
                  "Name":"The Pendulum",
                  "Type":"Pokespot",
                  "Location":"Herzberg Laboratories, 1125 Colonel By Dr, Ottawa, ON K1S 5B6, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697000,45.381582 ]
                  },
                  "properties": {
                  "Name":"River Gauging Station",
                  "Type":"Pokespot",
                  "Location":"Herzberg Laboratories, 1125 Colonel By Dr, Ottawa, ON K1S 5B6, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698764,45.384371 ]
                  },
                  "properties": {
                  "Name":"Carleton University Campus Map - Canal",
                  "Type":"Pokespot",
                  "Location":"Canal Building, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698666,45.384181 ]
                  },
                  "properties": {
                  "Name":"J 85-CAN-15 Aircraft Gas Turbine",
                  "Type":"Pokespot",
                  "Location":"Canal Building, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698340,45.384237 ]
                  },
                  "properties": {
                  "Name":"Steel Art",
                  "Type":"Pokespot",
                  "Location":"Canal Building, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698447,45.383810 ]
                  },
                  "properties": {
                  "Name":"University Centre",
                  "Type":"Pokespot",
                  "Location":"Azrieli Theatre, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.699094,45.383203 ]
                  },
                  "properties": {
                  "Name":"Carleton University Campus Map - Azrieli",
                  "Type":"Pokespot",
                  "Location":"328 Library Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698797,45.383188 ]
                  },
                  "properties": {
                  "Name":"Azrieli Pavilion",
                  "Type":"Pokespot",
                  "Location":"Tory Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698813,45.383399 ]
                  },
                  "properties": {
                  "Name":"Azrieli Theatre",
                  "Type":"Pokespot",
                  "Location":"Tory Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698304,45.382648 ]
                  },
                  "properties": {
                  "Name":"Tory Building the Egg",
                  "Type":"Pokespot",
                  "Location":"Tory Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698665,45.382023 ]
                  },
                  "properties": {
                  "Name":"Patterson Hall",
                  "Type":"Pokespot",
                  "Location":"Paterson Hall, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.699394,45.382139 ]
                  },
                  "properties": {
                  "Name":"MacOdrum Portrait",
                  "Type":"Pokespot",
                  "Location":"1125 Colonel By Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.699718,45.382326 ]
                  },
                  "properties": {
                  "Name":"MacOdrum Library",
                  "Type":"Pokespot",
                  "Location":"1008 Colonel By Dr, Ottawa, ON K1S 5B7, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.699093,45.381761 ]
                  },
                  "properties": {
                  "Name":"Carleton Crystals",
                  "Type":"Pokespot",
                  "Location":"34 Library Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.699540,45.381533 ]
                  },
                  "properties": {
                  "Name":"Southam Hall",
                  "Type":"Pokespot",
                  "Location":"Southam Hall, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.700209,45.381671 ]
                  },
                  "properties": {
                  "Name":"The Sculpture Of Randomness",
                  "Type":"Pokespot",
                  "Location":"Library Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698836,45.381274 ]
                  },
                  "properties": {
                  "Name":"Outdoor Lecture Hall",
                  "Type":"Pokespot",
                  "Location":"University Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.700076,45.380766 ]
                  },
                  "properties": {
                  "Name":"Virtual Simulation Building",
                  "Type":"Pokespot",
                  "Location":"Visualization and Simulation Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.699226,45.380114 ]
                  },
                  "properties": {
                  "Name":"Carleton U Plaque",
                  "Type":"Pokespot",
                  "Location":"Carleton University HCI 3110, 1125 Colonel By Dr, Ottawa, ON K1S 5B6, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.700656,45.380238 ]
                  },
                  "properties": {
                  "Name":"Carleton University Campus Map",
                  "Type":"Pokespot",
                  "Location":"Visualization and Simulation Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.701112,45.378729 ]
                  },
                  "properties": {
                  "Name":"Carleton University - Colonel By Entrance",
                  "Type":"Pokespot",
                  "Location":"1980 Colonel By Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.696068,45.385533 ]
                  },
                  "properties": {
                  "Name":"Carleton University Bus and Train Station",
                  "Type":"Pokespot",
                  "Location":"Campus Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.695820,45.385702 ]
                  },
                  "properties": {
                  "Name":"Carleton Otrain Station",
                  "Type":"Pokespot",
                  "Location":"Campus Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.694964,45.383372 ]
                  },
                  "properties": {
                  "Name":"Alumni Park Water Fountain",
                  "Type":"Pokespot",
                  "Location":"9376 University Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.695114,45.383216 ]
                  },
                  "properties": {
                  "Name":"Carleton University Robertson",
                  "Type":"Pokespot",
                  "Location":"43 Campus Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.695208,45.382930 ]
                  },
                  "properties": {
                  "Name":"Alumni Park",
                  "Type":"Pokespot",
                  "Location":"43 Campus Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.694847,45.382611 ]
                  },
                  "properties": {
                  "Name":"Alumni Park Gazebo",
                  "Type":"Pokespot",
                  "Location":"Robertson Hall, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.694054,45.383638 ]
                  },
                  "properties": {
                  "Name":"Founders' Memorial",
                  "Type":"Pokespot",
                  "Location":"Robertson Hall, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.693677,45.383882 ]
                  },
                  "properties": {
                  "Name":"Nesbitt Biology Building ",
                  "Type":"Pokespot",
                  "Location":"Nesbitt Biology Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.693524,45.383624 ]
                  },
                  "properties": {
                  "Name":"Butterfly House",
                  "Type":"Pokespot",
                  "Location":"Nesbitt Biology Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.693190,45.383438 ]
                  },
                  "properties": {
                  "Name":"Cassia Family Golden Honey Locust",
                  "Type":"Pokespot",
                  "Location":"Nesbitt Biology Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.692911,45.383547 ]
                  },
                  "properties": {
                  "Name":"New Sun Tribute",
                  "Type":"Pokespot",
                  "Location":"Nesbitt Biology Bldg, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.692207,45.383928 ]
                  },
                  "properties": {
                  "Name":"Kitigànensag Shed",
                  "Type":"Pokespot",
                  "Location":"National Wildlife Research Centre, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.692776,45.384280 ]
                  },
                  "properties": {
                  "Name":"National Wildlife Research Centre",
                  "Type":"Pokespot",
                  "Location":"National Wildlife Research Centre, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.693642,45.384550 ]
                  },
                  "properties": {
                  "Name":"Carleton Technology And Training Centre",
                  "Type":"Pokespot",
                  "Location":"1125 Colonel By Dr, Ottawa, ON K1S 5B6, Canada"
                  ,
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.692030,45.384126 ]
                  },
                  "properties": {
                  "Name":"Kitigànensag Community Garden",
                  "Type":"Pokespot",
                  "Location":"National Wildlife Research Centre, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.694778,45.384899 ]
                  },
                  "properties": {
                  "Name":"Carleton Maintenance Building",
                  "Type":"Pokespot",
                  "Location":"University Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.694633,45.385274 ]
                  },
                  "properties": {
                  "Name":"Carleton University Campus Map - Athletics",
                  "Type":"Pokespot",
                  "Location":"1125 Colonel By Dr, Ottawa, ON K1S 5B6, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.693677,45.385469 ]
                  },
                  "properties": {
                  "Name":"Carleton Ice House",
                  "Type":"Pokespot",
                  "Location":"9376 University Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697701,45.386420 ]
                  },
                  "properties": {
                  "Name":"Lennox And Addington Residence",
                  "Type":"Pokespot",
                  "Location":"Lennox and Addington, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697222,45.387356 ]
                  },
                  "properties": {
                  "Name":"Stormont And Dundas House",
                  "Type":"Pokespot",
                  "Location":"Stormont House, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697943,45.387580 ]
                  },
                  "properties": {
                  "Name":"St. Patrick Building",
                  "Type":"Pokespot",
                  "Location":"Campus Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698080,45.387890 ]
                  },
                  "properties": {
                  "Name":"Folded Metal",
                  "Type":"Pokespot",
                  "Location":"Campus Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697006,45.388399 ]
                  },
                  "properties": {
                  "Name":"Carleton University Campus Map - Residences North Entrance",
                  "Type":"Pokespot",
                  "Location":"Dundas House, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.696442,45.389142 ]
                  },
                  "properties": {
                  "Name":"Campus Map",
                  "Type":"Pokespot",
                  "Location":"98Q3+MC Nepean, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.693783,45.386336 ]
                  },
                  "properties": {
                  "Name":"Ravens Wall of Champions",
                  "Type":"Pokespot",
                  "Location":"Physical Recreation Centre, 65 University Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.693702,45.385998 ]
                  },
                  "properties": {
                  "Name":"Ravens Skywalk",
                  "Type":"Pokespot",
                  "Location":"Physical Recreation Centre, 65 University Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.692830,45.386591 ]
                  },
                  "properties": {
                  "Name":"Alumni Hall",
                  "Type":"Pokespot",
                  "Location":"3328 Bronson Ave, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.694161,45.386773 ]
                  },
                  "properties": {
                  "Name":"The Fieldhouse",
                  "Type":"Pokespot",
                  "Location":"Fieldhouse, 85 University Rd, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.692571,45.386194 ]
                  },
                  "properties": {
                  "Name":"Carleton Ice Rink Arena",
                  "Type":"Pokespot",
                  "Location":"Ice House, Ottawa, ON K1S, Canada",
                  }
                },
               ]
               }
          });

          // Add a symbol layer for Pokespots
          map.addLayer({
              'id': 'Pokespot',
              'type': 'symbol',
              'source': 'Pokespot',
              'layout': {
                  'icon-image': 'custom-marker',
                  'icon-size': 0.5
                
              }
          });
      }
  )

});


map.on('load', () => {
// Gym Marker
map.loadImage(
    './Pokemon Sprites/eevee.png',
    (error, image) => {
        if (error) throw error;
        map.addImage('Gym-marker', image);
        
        //Adding Gym
        map.addSource('Gym', {
                'type': 'geojson',
                'data': {
                  "type": "FeatureCollection",
                  "features": [
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -75.697720,45.384683 ]
                   },
                   "properties": {
                   "Name":"Carleton University Courtyard",
                   "Type":"Gym",
                   "PrimaryTeam":"Team Mystic",
                   "Location":"34 Library Rd, Ottawa, ON K1S 5R1, Canada",
                   }
                 },
                 {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.691849,45.386997 ]
                  },
                  "properties": {
                  "Name":"Carleton University North Entrance Sign ",
                  "Type":"Gym",
                  "PrimaryTeam":"Team Instinct",
                  "Location":"3328 Bronson Ave, Ottawa, ON K1S 5R1, Canada",
                  }
                },
                 {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.699372,45.382854 ]
                  },
                  "properties": {
                  "Name":"Dunton Tower",
                  "Type":"Gym",
                  "PrimaryTeam":"Team Valor",
                  "Location":"Dunton Tower, Ottawa, ON K1S, Canada",
                  }
                },
                 {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698581,45.382327 ]
                  },
                  "properties": {
                  "Name":"Carleton Quad",
                  "Type":"Gym",
                  "PrimaryTeam":"Team Mystic",
                  "Location":"Paterson Hall, Ottawa, ON K1S, Canada",
                  }
                },
                 {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.697595,45.384916 ]
                  },
                  "properties": {
                  "Name":"Orenda OT-F-3 Jet Engine",
                  "Type":"Gym",
                  "PrimaryTeam":"Team Mystic",
                  "Location":"Mackenzie Building, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.698022,45.383368 ]
                  },
                  "properties": {
                  "Name":"World Flags",
                  "Type":"Gym",
                  "PrimaryTeam":"Team Valor",
                  "Location":"University Centre, 1125 Colonel By Dr, Ottawa, ON K1S 5B6, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.695818,45.382247 ]
                  },
                  "properties": {
                  "Name":"Gandhi Statue",
                  "Type":"Gym",
                  "PrimaryTeam":"Team Mystic",
                  "Location":"9376 University Dr, Ottawa, ON K1S, Canada",
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                     "type": "Point",
                     "coordinates":  [ -75.695755,45.382059 ]
                  },
                  "properties": {
                  "Name":"Professor David Morice Leigh Farr Memorial Bench",
                  "Type":"Gym",
                  "PrimaryTeam":"Team Mystic",
                  "Location":"River Building, 9376 University Dr, Ottawa, ON K1S, Canada",
                  }
                },
             ]
              }

        });

        // Add a symbol layer for gym
        map.addLayer({
            'id': 'Gym',
            'type': 'symbol',
            'source': 'Gym',
            'layout': {
                'icon-image': 'Gym-marker',
                'icon-size': 0.8

            }
         });
    }
)
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
            "Neighbourhood": "CarletonUniversity",
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#088F8F",
            "fill-opacity": 0.2
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
              "coordinates": [-75.696467, 45.383831]
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
            'fill-color': '#088F8F',
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
        'text-radial-offset': 0.2,
        'text-justify': 'auto',
          },
        'filter': ['==', '$type', 'Point']
    });
  });

//Pokespot Popups
map.on('click', 'Pokespot', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const Pokespot = e.features[0];


  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 200) 
    {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

      new maplibregl.Popup()
          .setLngLat(coordinates)
          .setHTML(`
              <h3>${Pokespot.properties.Name} <img src="./Pokemon Sprites/Pokeball.png" style="width:100%; max-width:30px; height:auto;"></h3>
              <p>Type: ${Pokespot.properties.Type}</p>
              <p>Location: ${Pokespot.properties.Location}</p>
              `)
          .addTo(map);
  });

//Gym Popups
map.on('click', 'Gym', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const Gym = e.features[0];


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
              <h3>${Gym.properties.Name} <img src="./Pokemon Sprites/Greatball.png" style="width:100%; max-width:30px; height:auto;"></h3>
              <p>Type: ${Gym.properties.Type}</p>
              <p>PrimaryTeam: ${Gym.properties.PrimaryTeam}</p>
              <p>Location: ${Gym.properties.Location}</p>
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

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
  // If these two layers were not added to the map, abort
    if (!map.getLayer('Pokespot') || !map.getLayer('Gym')) 
    {
    return;
    }
 
  // Enumerate ids of the layers.
    const toggleableLayerIds = ['Pokespot', 'Gym'];
 
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
