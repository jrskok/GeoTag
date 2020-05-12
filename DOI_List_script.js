// Code goes here

$(document).ready(function() {
  $('#example').DataTable( {
    "ajax":{
      "url":"https://raw.githubusercontent.com/jrskok/GeoTag/master/GEOJSON_Papers.json",
      "dataSrc": "features"
    },
    "columns": [
      { data: "properties.TITLE" },
      { data: "properties.AUTHOR" },
      { data: "properties.YEAR" },
      { data: "properties.JOURNAL" },
      { data: "properties.PAPER_DOI" },
      { data: "properties.LOCATIONS.length" },
    ]
  });
}); 