const map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/05a6b83f-8c0f-4eb3-945c-267d64699e4f/style.json?key=tgBO5aQe2pu9PwiQjIYN',
  center: [-76.194, 45.226],
  zoom: 15,
  pitch: 0,
  bearing: 0
});

const aud = document.getElementById('aud2');

window.addEventListener ('click', () =>{

  if (aud.muted == true){
    aud.muted = false
  };
});

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const bldginfo = document.getElementById('bldginfo');

a1.addEventListener('click',function(){
  map.jumpTo({center: [-76.1944, 45.2262],zoom: 20});
  bldginfo.innerHTML = ('<img src="https://ontariosmallhalls.com/wp-content/uploads/2014/07/Almonte-Old-Town-Hall-3000x2002-300x200.jpg"></img>');
  console.log('a1');
})

a2.addEventListener('click',function(){
  map.jumpTo({center: [-76.1968, 45.2251],zoom: 20});
  bldginfo.innerHTML = ('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLadXqdcWt7AuJB-aozMcOy9J7a3rhYxRcng&s"></img>');
  console.log('a2');
})

a3.addEventListener('click',function(){
  map.jumpTo({center: [-76.192, 45.22795],zoom: 20});
  bldginfo.innerHTML = ('<img src="https://bloximages.chicago2.vip.townnews.com/insideottawavalley.com/content/tncms/assets/v3/editorial/6/ba/6ba7cd9b-895a-56ca-b872-a242e021d3ef/63d1b380f1d1d.image.jpg?resize=1040%2C867"></img>');
  console.log('a3');
})

a4.addEventListener('click',function(){
  map.jumpTo({center: [-76.1954, 45.2282],zoom: 20});
  bldginfo.innerHTML = ('<img src="https://bloximages.chicago2.vip.townnews.com/insideottawavalley.com/content/tncms/assets/v3/editorial/6/e6/6e614b4b-9375-597a-890b-cfc26ac0a744/671fe7e38e18e.image.jpg?resize=400%2C326"></img>');
  console.log('a4');
})

a5.addEventListener('click',function(){
  map.jumpTo({center: [-76.2531, 45.2465],zoom: 20});
  bldginfo.innerHTML = ('<img src="https://www.mississippimills.ca/en/explore-and-play/resources/Images/Kintail.jpg"></img>');
  console.log('a5');
})

a6.addEventListener('click',function(){
  map.jumpTo({center: [-76.2, 45.228],zoom: 20});
  bldginfo.innerHTML = ('<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3c/c6/a1/entrance-to-mississippi.jpg?w=1200&h=700&s=1"></img>');
  console.log('a6');
})

map.getCanvas().style.cursor = "crosshair";

let hoveredBldgId = null;

map.on('load', () => {
  map.loadImage(
    'building.png',
    (error, image) => {
      map.addImage('bldg-icon', image);

      map.addSource('HistoricBldgs', {
        'type': 'geojson',
        'data': {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-76.1954, 45.2282]
              },
              "properties": {
                "PlaceName": "Dungarvon Building",
                "Location": "38 Main Street E",
                "Built": "1887",
                "Description": "A historic church in dire need of rehabilitation.",
                "Image": "https://bloximages.chicago2.vip.townnews.com/insideottawavalley.com/content/tncms/assets/v3/editorial/6/e6/6e614b4b-9375-597a-890b-cfc26ac0a744/671fe7e38e18e.image.jpg?resize=400%2C326"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-76.1968, 45.2251]
              },
              "properties": {
                "PlaceName": "Black Watch Building",
                "Location": "38 Mill Street",
                "Built": "1910 or 1911",
                "Description": "A historic commercial building and a recognizable sight on Mill Street.",
                "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLadXqdcWt7AuJB-aozMcOy9J7a3rhYxRcng&s"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-76.192, 45.22795]
              },
              "properties": {
                "PlaceName": "County Registry Office",
                "Location": "125 Brougham St",
                "Built": "1879",
                "Description": "A typical example of a historic Canadian registry office.",
                "Image": "https://bloximages.chicago2.vip.townnews.com/insideottawavalley.com/content/tncms/assets/v3/editorial/6/ba/6ba7cd9b-895a-56ca-b872-a242e021d3ef/63d1b380f1d1d.image.jpg?resize=1040%2C867"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-76.2531, 45.2465]
              },
              "properties": {
                "PlaceName": "Gatehouse at Mill of Kintail",
                "Location": "Ramsay Concession 8",
                "Built": "Unknown, before 1830",
                "Description": "A visitor center for the Mill of Kintail attributed to John Baird and Robert Tate Mackenzie, two historic figures in the region.",
                "Image": "https://www.mississippimills.ca/en/explore-and-play/resources/Images/Kintail.jpg"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-76.1944, 45.2262]
              },
              "properties": {
                "PlaceName": "Almonte City Hall",
                "Location": "Bridge St",
                "Built": "1885",
                "Description": "A central venue for craft shows and performances in Almonte.",
                "Image": "https://ontariosmallhalls.com/wp-content/uploads/2014/07/Almonte-Old-Town-Hall-3000x2002-300x200.jpg"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-76.2, 45.228]
              },
              "properties": {
                "PlaceName": "Textile Museum",
                "Location": "Roseamond St E",
                "Description": "A museum in Almonte's former Rosamond Woolen Company.",
                "Built": "1867",
                "Image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3c/c6/a1/entrance-to-mississippi.jpg?w=1200&h=700&s=1"
              }
            },
          ]
        }
      });
      map.addLayer({
        'id': 'bldg',
        'type': 'symbol',
        'source': 'HistoricBldgs',
        'layout': {
          'icon-image': 'bldg-icon',
          'icon-size': 0.3
        }
      });
    }
  );

  const popup = new maplibregl.Popup();

  map.on("mouseenter", "bldg", (e) => {
    map.getCanvas().style.cursor = "pointer";
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.Description;
    popup.setLngLat(coordinates).setHTML(`
      <h3>${e.features[0].properties.PlaceName}</h3>
      <img src="${e.features[0].properties.Image}" alt="${e.features[0].properties.PlaceName}" style="max-width: 100%; height: auto;">
      <p>Location: ${e.features[0].properties.Location}</p>
      <p>Built: ${e.features[0].properties["Built"]}</p>
      <p>${description}</p>
    `).addTo(map);
  });

  map.on('mouseout', 'bldg', () => {
    map.getCanvas().style.cursor = "crosshair";
  });
});
