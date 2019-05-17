// loop through data

var table = d3.select('table');
table.attr('class', 'table-striped');

data.forEach((entry) => {
    var tbody = d3.select('tbody');
    var tr = tbody.append('tr');
    
    Object.entries(entry).forEach(([key,value]) => {
        tr.append('td').text(value);
    });
});

// datetime

var searchDateTime = d3.select('#search_date');
searchDateTime.on('click', function() {
    d3.event.preventDefault();
    var inputHTML = d3.select('#ufo_date');
    var input = inputHTML.property('value');
    
    var filtered = data.filter(data => data.datetime === input);
    console.log(filtered);
    });

// city

var searchCity = d3.select('#search_city');
searchCity.on('click', function() {
    d3.event.preventDefault();
    var inputHTML = d3.select('#ufo_city');
    var input = inputHTML.property('value');
    
    var filtered = data.filter(data => data.city === input);
    console.log(filtered);
    });

// state

var searchState = d3.select('#search_state');
searchState.on('click', function() {
    d3.event.preventDefault();
    var inputHTML = d3.select('#ufo_state');
    var input = inputHTML.property('value');
    
    var filtered = data.filter(data => data.state === input);
    console.log(filtered);
    });

// country

var searchCountry = d3.select('#search_country');
searchCountry.on('click', function() {
    d3.event.preventDefault();
    var inputHTML = d3.select('#ufo_country');
    var input = inputHTML.property('value');
    
    var filtered = data.filter(data => data.country === input);
    console.log(filtered);
    });

// shape

var searchShape = d3.select('#search_shape');
searchShape.on('click', function() {
    d3.event.preventDefault();
    var inputHTML = d3.select('#ufo_shape');
    var input = inputHTML.property('value');
    
    var filtered = data.filter(data => data.shape === input);
    console.log(filtered);
    });

// general

var searchShape = d3.select('#search_general');
searchShape.on('click', function() {
    d3.event.preventDefault();
    var inputHTML = d3.select('#ufo_general');
    var input = inputHTML.property('value');
    
    var filterd = data.filter(data => data.datetime === input 
           || data.city === input 
           || data.state === input 
           || data.country === input
           || data.shape === input
           || data.durationMinutes === input
           || data.comment === input);
    console.log(filterd)
    });

