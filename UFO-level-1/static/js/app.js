// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select('tbody');
// create the table with each information
function maketable(data){
  tbody.selectAll('tr').remove();
  data.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form-date");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  filteredData = tableData;
  // Select the input element and get the raw HTML node
  var date = d3.select("#datetime").node().value;
  // if date not found
  if (date.length !== 0 && date !== null ){
    dates = []
    tableData.map(x => {
      var d = x.datetime; 
      dates.push(d);
    });
    if (dates.includes(date) === false){
      alert("No data found for input date");
    }else{
      var filteredData = tableData.filter(x => x.datetime === date);
    };  
  }
  maketable(filteredData);
};
//makes the table at the opening of the page
maketable(tableData);