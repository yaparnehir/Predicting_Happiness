// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
  });
// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark,
    Satellite: satelliteStreets
  };
  let major = new L.LayerGroup();

let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})
  
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



let data = lastData;


function styleInfo(feature) {
  return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature["Happiness score"]),
      color: "#000000",
      radius: feature.latitude,
      stroke: true,
      weight: 0.5
  };
};

// This function determines the color of the marker based on the magnitude of the earthquake.
function getColor(test) {
  if (test > 7) {
      return "#2cea32";
  }
  if (test > 6) {
      return "#6fea2c";
  }
  if (test > 5) {
      return "#daea2c";
  }
  if (test > 4) {
      return "#eace2c";
  }
  if (test > 1) {
      return "#ea3f2c";
  }
  return "#98ee00";
};

data.forEach(function(feature) {
  L.circleMarker([feature.latitude, feature.longitude],
     {fillColor: getColor(feature["Happiness score"]),
      radius: feature["Happiness score"]*6
    }
    ).bindPopup("<h2>" + feature.Country + ", "+ feature["Happiness score"] + "</h2> <hr> <h3>Happiness " + feature.IS_HAPPY + "</h3>")
  .addTo(map)});
// Loop through the countries array and create one marker for each country.
//data.forEach(function(country) {
    //console.log(country)
    //L.circleMarker(L.latLng([country.latitude, country.longitude])).bindPopup("<h2>" + country.Country + ", "+ country["Happiness score"] + "</h2> <hr> <h3>Happiness " + country.IS_HAPPY + "</h3>")
    //.addTo(map);
//});


