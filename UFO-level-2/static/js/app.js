// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

tableData.forEach((ufo) => {
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(([key,value]) =>{
        var cell = row.append('td');
        cell.text(value);
    });
});

var dropDate = d3.select('#mylist-Date')
var dropCity = d3.select('#mylist-City')
var dropState = d3.select('#mylist-State')
var dropCountry = d3.select('#mylist-Country')
var dropShape = d3.select('#mylist-Shape')


tableData.forEach(function(ufo) {
    var uniqueDate = [];
    if (uniqueDate.indexOf(ufo.datetime) === -1){
        uniqueDate.push(ufo.datetime);
        var optionDate = dropDate.append('option');
        optionDate.text(ufo.datetime);
    };
    //console.log(uniqueDate)
    var uniqueCity = [];
    if (uniqueDate.indexOf(ufo.city) === -1){
        uniqueCity.push(ufo.city);
        var optionCity = dropCity.append('option');
        optionCity.text(ufo.city);
    }; 
    var uniqueState = [];
    if (uniqueState.indexOf(ufo.state) === -1){
        uniqueState.push(ufo.state);
        var optionState = dropState.append('option');
        optionState.text(ufo.state);
    }; 
    var uniqueCountry = [];
    if (uniqueCountry.indexOf(ufo.country) === -1){
        uniqueCountry.push(ufo.country);
        var optionCountry = dropCountry.append('option');
        optionCountry.text(ufo.country);
    };
    var uniqueShape = [];
    if (uniqueShape.indexOf(ufo.shape) === -1){
        uniqueShape.push(ufo.shape);
        var optionShape = dropShape.append('option');
        optionShape.text(ufo.shape);
    };
});

dropDate.on('change',runEnter);
dropCity.on('change',runEnter);
dropState.on('change',runEnter);
dropCountry.on('change',runEnter);
dropShape.on('change',runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var date = dropDate.property('value');
    var city = dropCity.property('value');
    var state = dropState.property('value');
    var country = dropCountry.property('value');
    var shape = dropShape.property('value');
    // filter the data
    if (date !== 'All') {
        
    }
    
    //creates the table with the filtered data
    var tbody = d3.select('tbody');
    tbody.selectAll('tr').remove();
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }