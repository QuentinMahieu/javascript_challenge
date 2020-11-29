// from data.js
var tableData = data;

// create a function to make the table
function makeTable(data){
    var tbody = d3.select("#ufo-table").select("tbody");
    tbody.html("");
    data.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// function to append the unique data in the dropdown menu
function dropdownValues(data,tag,key){
    d3.selectAll(tag + '> option').remove();
    var dropDown = d3.select(tag);
    dropDown.append('option').text('All');
    var values = data.map(x => x = x[key]).sort();
    var unique = []
    for(var i=0; i< values.length;i++){
        if (unique.includes(values[i]) === false){
            unique.push(values[i]);
            var option = dropDown.append('option');
            option.text(values[i]);
        };
    };
};
function selectValue(data,tag,selection){
    d3.selectAll(tag + '> option').remove();
    var dropDown = d3.select(tag);
    dropDown.append('option').text(selection);
    dropDown.append('option').text('All');  
};

dropdownValues(tableData,'#mylist-Date','datetime');
dropdownValues(tableData,'#mylist-City','city');
dropdownValues(tableData,'#mylist-State','state');
dropdownValues(tableData,'#mylist-Country','country');
dropdownValues(tableData,'#mylist-Shape','shape');

var dropDate = d3.select("#mylist-Date");
var dropCity = d3.select("#mylist-City");
var dropState = d3.select("#mylist-State");
var dropCountry = d3.select("#mylist-Country");
var dropShape = d3.select("#mylist-Shape");

dropDate.on("change", runSelect);
dropCity.on('change', runSelect);
dropState.on('change', runSelect);
dropCountry.on('change', runSelect);
dropShape.on('change', runSelect);

function runSelect(){
    filteredData = tableData
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // get the values chosen
    var date = dropDate.node().value;
    var city = dropCity.node().value;
    var state = dropState.node().value;
    var country = dropCountry.node().value;
    var shape = dropShape.node().value;

    if (date !== 'All'){
        var filteredData = tableData.filter(x => x.datetime === date);
        dropdownValues(filteredData,'#mylist-City','city');
        dropdownValues(filteredData,'#mylist-State','state');
        dropdownValues(filteredData,'#mylist-Country','country');
        dropdownValues(filteredData,'#mylist-Shape','shape');
        if (city !== 'All'){
            var filteredData = filteredData.filter(x => x.city === city);
            selectValue(filteredData,'#mylist-City',city);
            dropdownValues(filteredData,'#mylist-State','state');
            dropdownValues(filteredData,'#mylist-Country','country');
            dropdownValues(filteredData,'#mylist-Shape','shape');
            if (state !== 'All'){
                var filteredData = filteredData.filter(x => x.state === state);
                selectValue(filteredData,'#mylist-State',state);
                dropdownValues(filteredData,'#mylist-Country','country');
                dropdownValues(filteredData,'#mylist-Shape','shape');
                if (country !== 'All'){
                    var filteredData = filteredData.filter(x => x.country === country);
                    selectValue(filteredData,'#mylist-Country',country);
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                    }
                }else{
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-Country','country');
                    }
                }
            }else{
                if (country !== 'All'){
                    var filteredData = filteredData.filter(x => x.country === country);
                    selectValue(filteredData,'#mylist-Country',country);
                    dropdownValues(filteredData,'#mylist-State','state');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-State','state');
                    }
                }else{
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-Country','country');
                        dropdownValues(filteredData,'#mylist-State','state');
                    }
                }
            }
        }else{
            if (state !== 'All'){
                var filteredData = filteredData.filter(x => x.state === state);
                selectValue(filteredData,'#mylist-State',state);
                dropdownValues(filteredData,'#mylist-City','city');
                dropdownValues(filteredData,'#mylist-Country','country');
                dropdownValues(filteredData,'#mylist-Shape','shape');
                if (country !== 'All'){
                    var filteredData = filteredData.filter(x => x.country === country);
                    selectValue(filteredData,'#mylist-Country',country);
                    dropdownValues(filteredData,'#mylist-City','city');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-City','city');
                    }
                }else{
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-City','city');
                        dropdownValues(filteredData,'#mylist-Country','country');
                        dropdownValues(filteredData,'#mylist-Shape','shape');
                    }
                }
            }else{
                if (country !== 'All'){
                    var filteredData = filteredData.filter(x => x.country === country);
                    selectValue(filteredData,'#mylist-Country',country);
                    dropdownValues(filteredData,'#mylist-State','state');
                    dropdownValues(filteredData,'#mylist-City','city');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-City','city');
                        dropdownValues(filteredData,'#mylist-State','state');
                    }
                }else{
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-City','city');
                        dropdownValues(filteredData,'#mylist-State','state');
                        dropdownValues(filteredData,'#mylist-Country','country');
                        dropdownValues(filteredData,'#mylist-Shape','shape');
                    }
                }
            }
        }
    }else {
        if (city !== 'All'){
            var filteredData = tableData.filter(x => x.city === city);
            dropdownValues(filteredData,'#mylist-Date','datetime');
            dropdownValues(filteredData,'#mylist-State','state');
            dropdownValues(filteredData,'#mylist-Country','country');
            dropdownValues(filteredData,'#mylist-Shape','shape');
            if (state !== 'All'){
                var filteredData = filteredData.filter(x => x.state === state);
                selectValue(filteredData,'#mylist-State',state);
                dropdownValues(filteredData,'#mylist-Date','datetime');
                dropdownValues(filteredData,'#mylist-Country','country');
                dropdownValues(filteredData,'#mylist-Shape','shape');
                if (country !== 'All'){
                    var filteredData = filteredData.filter(x => x.country === country);
                    selectValue(filteredData,'#mylist-Country',country);
                    dropdownValues(filteredData,'#mylist-Date','datetime');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-Date','datetime');
                    }
                }else{
                    if (shape !== 'All'){
                    var filteredData = filteredData.filter(x => x.shape === shape);
                    selectValue(filteredData,'#mylist-Shape',shape);
                    dropdownValues(filteredData,'#mylist-Country','country');
                    dropdownValues(filteredData,'#mylist-Date','datetime');
                    }
                }
            }else{
                if (country !== 'All'){
                    var filteredData = filteredData.filter(x => x.country === country);
                    selectValue(filteredData,'#mylist-Country',country);
                    dropdownValues(filteredData,'#mylist-State','state');
                    dropdownValues(filteredData,'#mylist-Date','datetime');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-Date','datetime');
                        dropdownValues(filteredData,'#mylist-State','state');
                    }
                }else{
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-Country','country');
                        dropdownValues(filteredData,'#mylist-Date','datetime');
                        dropdownValues(filteredData,'#mylist-State','state');
                    }
                }
            }
        }else{
            if (state !== 'All'){
                var filteredData = tableData.filter(x => x.state === state);
                dropdownValues(filteredData,'#mylist-City','city');
                dropdownValues(filteredData,'#mylist-Date','datetime');
                dropdownValues(filteredData,'#mylist-Country','country');
                dropdownValues(filteredData,'#mylist-Shape','shape');
                if (country !== 'All'){
                    var filteredData = filteredData.filter(x => x.country === country);
                    selectValue(filteredData,'#mylist-Country',country);
                    dropdownValues(filteredData,'#mylist-City','city');
                    dropdownValues(filteredData,'#mylist-Date','date');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-City','city');
                        dropdownValues(filteredData,'#mylist-Date','datetime');
                    }
                }else{
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-City','city');
                        dropdownValues(filteredData,'#mylist-Country','country');
                        dropdownValues(filteredData,'#mylist-Date','datetime');
                    }
                }
            }else{
                if (country !== 'All'){
                    var filteredData = tableData.filter(x => x.country === country);
                    dropdownValues(filteredData,'#mylist-City','city');
                    dropdownValues(filteredData,'#mylist-State','state');
                    dropdownValues(filteredData,'#mylist-Date','datetime');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    if (shape !== 'All'){
                        var filteredData = filteredData.filter(x => x.shape === shape);
                        selectValue(filteredData,'#mylist-Shape',shape);
                        dropdownValues(filteredData,'#mylist-City','city');
                        dropdownValues(filteredData,'#mylist-State','state');
                        dropdownValues(filteredData,'#mylist-Date','datetime');
                    }
                }else{
                    if (shape !== 'All'){
                            var filteredData = tableData.filter(x => x.shape === shape);
                            dropdownValues(filteredData,'#mylist-City','city');
                            dropdownValues(filteredData,'#mylist-State','state');
                            dropdownValues(filteredData,'#mylist-Country','country');
                            dropdownValues(filteredData,'#mylist-Date','datetime');
                    }else{
                    dropdownValues(filteredData,'#mylist-City','city');
                    dropdownValues(filteredData,'#mylist-Date','datetime');
                    dropdownValues(filteredData,'#mylist-State','state');
                    dropdownValues(filteredData,'#mylist-Country','country');
                    dropdownValues(filteredData,'#mylist-Shape','shape');
                    }
                }
            }
        }
    };
    makeTable(filteredData);
};

makeTable(tableData);