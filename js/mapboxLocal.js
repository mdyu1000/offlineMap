  // mapboxgl.accessToken = 'pk.eyJ1Ijoiazd5dSIsImEiOiJjamthaDBpbmcyYmNxM2tuY2lmdnoxc2J3In0.0B2spvUULNIenp_9fXg41g';

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
  "maxZoom": 8,
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

  // 添加图层，使得上面的数据源里面的数据可视化
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



