
var data = "../../Data/countries.geojson";

var boxscore = "../../Data/boxscore.json";
var satcat = "../../Data/satcat.json";

function initialize() {

  d3.json(data, function(data) {
    var countries_l = data.features.length;
    var countries_f = data.features;

    d3.json(boxscore, function(box) {

      d3.json(satcat, function(sat) {
        // console.log(sat[0]);
        var sat_l = sat.length;

        var year5060 = {};
        var year6070 = {};
        var year7080 = {};
        var year8090 = {};
        var year902000 = {};
        var year20002010 = {};
        var year2010 = {};
        var year_all = {};

        for (var x = 0; x < sat_l; x++) {
          var launch_date = sat[x].LAUNCH_YEAR;
          var sat_country = sat[x].COUNTRY;
          var sat_type = sat[x].OBJECT_TYPE;

          if (!(sat_country in year_all)) {
            year_all[sat_country] = {};
            year_all[sat_country]["count"] = 1;
          } else {
            year_all[sat_country]["count"]++;
          }
          if (!("type" in year_all[sat_country])) {
            year_all[sat_country]["type"] = {};
          }
          if (!(sat_type in year_all[sat_country]["type"])) {
            year_all[sat_country]["type"][sat_type] = 1;
          } else {
            year_all[sat_country]["type"][sat_type]++;
          }

          if (+launch_date < 1960) {
            if (!(sat_country in year5060)) {
              year5060[sat_country] = {};
              year5060[sat_country]["count"] = 1;
            } else {
              year5060[sat_country]["count"]++;
            }
            if (!("type" in year5060[sat_country])) {
              year5060[sat_country]["type"] = {};
            }
            if (!(sat_type in year5060[sat_country]["type"])) {
              year5060[sat_country]["type"][sat_type] = 1;
            } else {
              year5060[sat_country]["type"][sat_type]++;
            }
          } else if (+launch_date < 1970) {
            if (!(sat_country in year6070)) {
              year6070[sat_country] = {}
              year6070[sat_country]["count"] = 1;
            } else {
              year6070[sat_country]["count"]++;
            }
            if (!("type" in year6070[sat_country])) {
              year6070[sat_country]["type"] = {};
            }
            if (!(sat_type in year6070[sat_country]["type"])) {
              year6070[sat_country]["type"][sat_type] = 1;
            } else {
              year6070[sat_country]["type"][sat_type]++;
            }
          } else if (+launch_date < 1980) {
            if (!(sat_country in year7080)) {
              year7080[sat_country] = {};
              year7080[sat_country]["count"] = 1;
            } else {
              year7080[sat_country]["count"]++;
            }
            if (!("type" in year7080[sat_country])) {
              year7080[sat_country]["type"] = {};
            }
            if (!(sat_type in year7080[sat_country]["type"])) {
              year7080[sat_country]["type"][sat_type] = 1;
            } else {
              year7080[sat_country]["type"][sat_type]++;
            }
          } else if (+launch_date < 1990) {
            if (!(sat_country in year8090)) {
              year8090[sat_country] = {};
              year8090[sat_country]["count"] = 1;
            } else {
              year8090[sat_country]["count"]++;
            }
            if (!("type" in year8090[sat_country])) {
              year8090[sat_country]["type"] = {};
            }
            if (!(sat_type in year8090[sat_country]["type"])) {
              year8090[sat_country]["type"][sat_type] = 1;
            } else {
              year8090[sat_country]["type"][sat_type]++;
            }
          } else if (+launch_date < 2000) {
            if (!(sat_country in year902000)) {
              year902000[sat_country] = {};
              year902000[sat_country]["count"] = 1;
            } else {
              year902000[sat_country]["count"]++;
            }
            if (!("type" in year902000[sat_country])) {
              year902000[sat_country]["type"] = {};
            }
            if (!(sat_type in year902000[sat_country]["type"])) {
              year902000[sat_country]["type"][sat_type] = 1;
            } else {
              year902000[sat_country]["type"][sat_type]++;
            }
          } else if (+launch_date < 2010) {
            if (!(sat_country in year20002010)) {
              year20002010[sat_country] = {};
              year20002010[sat_country]["count"] = 1;
            } else {
              year20002010[sat_country]["count"]++;
            }
            if (!("type" in year20002010[sat_country])) {
              year20002010[sat_country]["type"] = {};
            }
            if (!(sat_type in year20002010[sat_country]["type"])) {
              year20002010[sat_country]["type"][sat_type] = 1;
            } else {
              year20002010[sat_country]["type"][sat_type]++;
            }
          } else {
            if (!(sat_country in year2010)) {
              year2010[sat_country] = {};
              year2010[sat_country]["count"] = 1;
            } else {
              year2010[sat_country]["count"]++;
            }
            if (!("type" in year2010[sat_country])) {
              year2010[sat_country]["type"] = {};
            }
            if (!(sat_type in year2010[sat_country]["type"])) {
              year2010[sat_country]["type"][sat_type] = 1;
            } else {
              year2010[sat_country]["type"][sat_type]++;
            }
          }
        }

        year5060 = countriesLayers(box, year5060, countries_l, countries_f);
        year6070 = countriesLayers(box, year6070, countries_l, countries_f);
        year7080 = countriesLayers(box, year7080, countries_l, countries_f);
        year8090 = countriesLayers(box, year8090, countries_l, countries_f);
        year902000 = countriesLayers(box, year902000, countries_l, countries_f);
        year20002010 = countriesLayers(box, year20002010, countries_l, countries_f);
        year2010 = countriesLayers(box, year2010, countries_l, countries_f);
        year_all = countriesLayers(box, year_all, countries_l, countries_f);
        console.log(year5060);
        // console.log(year6070);
        // console.log(year7080);
        // console.log(year8090);
        // console.log(year902000);
        // console.log(year20002010);
        // console.log(year2010);

        buildMap(year5060, year6070, year7080, year8090, year902000, year20002010, year2010, year_all);
      });
    });
  });



}

function countriesLayers(box, year, countries_l, countries_f) {
  // first, relation between boxscore (countries satellites) and satcat
  // second, from previous relation to countries geojson
  var box_l = box.length;
  var year_code = Object.keys(year);
  var year_code_l = year_code.length;
  year.layer = [];

  for (var i = 0; i < year_code_l; i++) {

    for (var j = 0; j < box_l; j++) {
      var box_code = box[j].SPADOC_CD;
      if (box_code === year_code[i]) {
        // console.log(box[i].COUNTRY);
        var box_country = box[j].COUNTRY;
        // console.log(box_country);

        for (var k = 0; k < countries_l; k++) {
          var country = countries_f[k].properties.ADMIN;

          if(box_country.includes(country.toUpperCase()) || country.includes(box_country.toUpperCase())) {
            var obj_type = getInfoFrom(year[year_code[i]]["type"]).join(" <br>");

            year.layer.push(L.geoJson(countries_f[k], {
              style: function(feature) {
                return {
                  color: selectColor(year[year_code[i]]["count"]),
                  fillColor: selectColor(year[year_code[i]]["count"]),
                  fillOpacity: 0.5,
                  weight: 1.5
                };
              }
            }).bindPopup(`${country} : <b>${year[year_code[i]]["count"]}</b><hr>Object types: <br>${obj_type}`));

            break;
          }

        }
      }
    }

  }

  return year;
  // .match(/\(([^)]+)\)/)[1]
}

function getInfoFrom(object) {
  var popup = [];
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var stringLine = "<a href='../space_objects/" + key + ".html'>" + key + "</a>" + " --> " + object[key];
      popup.push(stringLine);
    }
  }
  return popup;
}

function buildMap(year5060, year6070, year7080, year8090, year902000, year20002010, year2010, year_all) {
  var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  var layer5060 = L.layerGroup(year5060.layer);
  var layer6070 = L.layerGroup(year6070.layer);
  var layer7080 = L.layerGroup(year7080.layer);
  var layer8090 = L.layerGroup(year8090.layer);
  var layer902000 = L.layerGroup(year902000.layer);
  var layer20002010 = L.layerGroup(year20002010.layer);
  var layer2010 = L.layerGroup(year2010.layer);
  var layerAll = L.layerGroup(year_all.layer);

  var baseMaps = {
    Dark: dark
  };

  var overlayMaps = {
    "50-60" : layer5060,
    "60-70" : layer6070,
    "70-80" : layer7080,
    "80-90" : layer8090,
    "90-2000" : layer902000,
    "2000-2010" : layer20002010,
    "2010 >" : layer2010,
    "All-time" : layerAll
  };

  var myMap = L.map("map", {
    center: [40, 0],
    zoom: 2,
    layers: [dark, layer5060]
  });

  L.control.layers(baseMaps, overlayMaps).addTo(myMap);

  legend(myMap);
}

function legend(myMap) {
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'legend');

    div.innerHTML += "<h4>Space Objects</h4>";
    div.innerHTML += '<i style="background: red"></i><span>0-9</span><br>';
    div.innerHTML += '<i style="background: yellow"></i><span>10-99</span><br>';
    div.innerHTML += '<i style="background: green"></i><span>100-999</span><br>';
    div.innerHTML += '<i style="background: blue"></i><span>1000-9999</span><br>';
    div.innerHTML += '<i style="background: purple"></i><span>10000 ></span><br>';

    return div;
  };

  legend.addTo(myMap);
}

function selectColor(country) {
  if (country < 10) {
    return "red";
  } else if (country < 100) {
    return "yellow";
  } else if (country < 1000) {
    return "green";
  } else if (country < 10000) {
    return "blue";
  } else {
    return "purple";
  }
}

initialize();
