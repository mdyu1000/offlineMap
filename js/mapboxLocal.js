  // mapboxgl.accessToken = 'pk.eyJ1Ijoiazd5dSIsImEiOiJjamthaDBpbmcyYmNxM2tuY2lmdnoxc2J3In0.0B2spvUULNIenp_9fXg41g';
const submitBtn = document.getElementById("submitBtn")
const inputLat = document.getElementById("Latitude")
const inputLng = document.getElementById("Longitude")
const inputZoom = document.getElementById("zoom")

const marker = document.getElementById("marker")
const markerWidth = 24

const mapbox = document.getElementById("map")
const mapWidth = mapbox.clientWidth
const mapHeight = mapbox.clientHeight

const TILE_SIDE_LENGTH = 256
const MAX_ZOOM = 8

var map = new mapboxgl.Map({
  container: 'map',
  style: {
    "version": 8,
    "name": "Mapbox Streets",
    // "sprite": "mapbox://sprites/mapbox/streets-v8",
    "sprite": location.origin + location.pathname + "sprite",
    "glyphs": location.origin + location.pathname + "font/{fontstack}/{range}.pbf",
    /* 數據來源 */
    "sources": {
      "osm-tiles": {
        "type": "raster",
        'tiles': [
            // "http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
            location.origin + location.pathname + "countries/{z}/{x}/{y}.png"
          ],
      },
    },
    /* 數據呈現的樣子 */
    "layers": [
      {
        "id": "simple-tiles",
        "type": "raster",
        "source": "osm-tiles",
      }
    ],
  },
  "center": [121.398220, 25.144707],
  // "center": [-70.130385, 39.942069],
  "maxZoom": MAX_ZOOM,
  "minZoom": 0,
  "zoom": 4,
});

map.on('load', () => {
  map.addSource("points", {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-77.03238901390978, 38.913188059745586]
        },
        "properties": {
          "title": "Mapbox DC 中国文字",
          "icon": "monument"
        }
        }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.414, 37.776]
        },
        "properties": {
          "title": "Mapbox SF",
          "icon": "harbor"
        }
        }]
    }
  });

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": "points",
    "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Regular"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }
  });

})
    
// function long2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }
// function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }

submitBtn.addEventListener("click", () => {
  let lat = Number(inputLat.value)
  let lng = Number(inputLng.value)

  // let resultX = long2tile(lng, currentZoom)
  // let resultY = lat2tile(lat, currentZoom)

  if(lat == ""){
    alert("lat can't be empty")
  }else if(lng == ""){
    alert("lng can't be empty")
  }else{
    let imgSrc = `${location.origin}${location.pathname}asset/marker.png`

    if(map.hasImage("marker")){
      map.removeImage("marker")
      map.removeLayer("marker")
      map.removeSource("marker")
    }

    map.loadImage(imgSrc, function(error, image) {
      if (error) throw error;
      map.addImage('marker', image);
      map.addLayer({
        "id": "marker",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [lng, lat]
              }
            }]
          }
        },
        "layout": {
          "icon-image": "marker",
          "icon-size": 1
        }
      });
    });
  
  }
})



