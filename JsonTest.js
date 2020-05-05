var map = L.map('map', {
  'center': [0, 0],
  'zoom': 1,
  'layers': [
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      'attribution': 'Map data &copy; OpenStreetMap contributors'
    })
  ]
});

$.getJSON('JsonTest.json', function (geojson) {
  L.geoJson(geojson, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.name);
    }
  }).addTo(map);
});
