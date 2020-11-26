// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select('tbody');
// create the table with each information
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form-date");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // filter the data
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
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