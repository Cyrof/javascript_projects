
var date = new Date();

var monthIndex = date.getMonth();

var months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

console.log(months[monthIndex]);

var year = date.getFullYear();

// var prevLastDay = new Date(year, monthIndex, 0).getDay();

// console.log(prevLastDay);
var firstDayOfMonthIndex = date.getDay();
