// Create variable which holds current date information with moment.js
var date = moment().format('LLLL'); 

// Add text to date variable
$("date").text((moment()));

// Append date to header so that it shows up below the text we already have 
$("header").append(date);


var mondayRow = $("<tr>")
mondayRow.text("Monday");
$(".table").append(mondayRow);
