// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterbutton = d3.select("#filter-btn");

filterbutton.on("click", function(){

    d3.event.preventDefault();
    
    // date filter
    var inputElementDate = d3.select("#datetime");
    var inputValueDate = inputElementDate.property("value")

    if (inputValueDate === "") {
        var filteredByDate = tableData
        }
    else {
        var filteredByDate = tableData.filter(siting => siting.datetime === inputValueDate)
    }

        // City filter
    var inputElementCity = d3.select("#cityinput");
    var inputValueCity = inputElementCity.property("value")

    if (inputValueCity === "") {
        var filteredByCity = filteredByDate
            }
    else {
        var filteredByCity = filteredByDate.filter(siting => siting.city === inputValueCity)
    }

    // State filter
    var inputElementState = d3.select("#stateinput");
    var inputValueState = inputElementState.property("value")

    if (inputValueState === "") {
        var filteredByState = filteredByCity
            }
    else {
        var filteredByState = filteredByCity.filter(siting => siting.state === inputValueState)
    }

    // Country filter
    var inputElementCountry = d3.select("#countryinput");
    var inputValueCountry = inputElementCountry.property("value")

    if (inputValueCountry === "") {
        var filteredByCountry = filteredByState
            }
    else {
        var filteredByCountry = filteredByState.filter(siting => siting.country === inputValueCountry)
    }
 
    // Shape filter
    var inputElementShape = d3.select("#shapeinput");
    var inputValueShape = inputElementShape.property("value")

    if (inputValueShape === "") {
        var filteredByShape = filteredByCountry
            }
    else {
        var filteredByShape = filteredByCountry.filter(siting => siting.shape === inputValueShape)
    }

    table = d3.select("tbody")
 
    table.html("")

    filteredByShape.forEach(function(siting) {
        
        newrow = table.append("tr")
        newrow.append("td").text(siting.datetime)
        newrow.append("td").text(siting.city)
        newrow.append("td").text(siting.state)
        newrow.append("td").text(siting.country)
        newrow.append("td").text(siting.shape)
        newrow.append("td").text(siting.durationMinutes)
        newrow.append("td").text(siting.comments)
    })

    
})




