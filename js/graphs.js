
var trace = {
    x: ["Morelos1","Morelos2","Solidaridad1","Solidaridad2","UNAMsat","Satmex5","Satmex6","Quetzsat1","Mexsat3","Satmex8","Sky Mexico1","Morelos3","Panini1"],
    y: [1985,1985,1993,1994,1996,1998,2006,2011,2012,2013,2015,2015,2019],
    type:"scatter",
    mode:"line",
};

var data = [trace];

var layout ={
    title: "Mexican Satelite Launches"
}

Plotly.newPlot("plot",data,layout);


/*var api_key = "Y62K46-LRRK5M-6U4DL7-47J8";

var url = "";

var date = "";

var query = url + date + api_key;

function unpack(row,index){
    return row.map(function(row){
        return row[index];
    });
};

function buildPlot(){
    d3.json(query).then(function(data){
        var name = ;
        var stock = ;
        var startDate = ;
        var endDate = ;
        var dates = ;
        var launchDate = ;


    var trace = {
       type: "scatter",
       mode: "lines",
       name: name,
       x: dates,
       y: launchDate,
       line: {
           color: "#000000"
       }
    };

    var data = [trace];

    var layout = {
        title: "Satelite Evolution",
        xaxis: {
            range: [startDate,endDate],
            type: "date"
        },
        yaxis: {
            autorange: true,
            type: "linear"
        }
    };

    Plotly.newPlot("plot",data, layout);

    });
}
buildPlot();*/




