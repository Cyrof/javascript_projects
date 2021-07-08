/*make calendar hiddem*/
function hide(){
    var x = document.querySelector(".container");
    if (x.style.display ==="none"){
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
}


/*Calendar*/ 

//create date obj
var date = new Date();




var calendarScript = () =>{
    date.setDate(1);

    //get month by index
    var monthIndex = date.getMonth();

    //call day class from html
    var dayInCurrentMonth = document.querySelector(".days");
    
    //get current year and month 
    var year = date.getFullYear();
    var month = date.getMonth();
    
    //create new date obj specifying current year and month
    var newDate = new Date(year, month + 1, 0);
    
    //get num days in month
    var daysInMonth = newDate.getDate();
    
    //find the day index of where the first day will start on calendar
    var firstDayOfMonthIndex = date.getDay();
    
    //get last day of prev month 
    var prevLast = new Date(year, month, 0).getDate();
    
    // get the number of days to put into calendar 
    var nextDays = 42 - daysInMonth - firstDayOfMonthIndex;
    
    //create new date obj to compare
    var compareDate = new Date();
    
    //array of months
    var months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    //set .date h1  and .date p text to month dynamically using js
    document.querySelector(".date h1").innerHTML = months[monthIndex];
    document.querySelector(".date p").innerHTML = new Date().toDateString();
    
    //set days to empty string
    var days = "";

    //for loop to get prev month dates
    for(x = firstDayOfMonthIndex; x > 0; x--){
        days += `<div class="prev_date">${prevLast - x + 1}</div>`;
    }
    
    // for loop to get the current month dates
    for(i = 1; i <= daysInMonth; i++){
        if(i === compareDate.getDate() && date.getMonth() === compareDate.getMonth()){
            days += `<div class="today">${i}</div>`;
        }else{
            days += `<div>${i}</div>`;
        }
    }
    
    // for loop to get next months dates
    for(j = 1; j <= nextDays; j++){
        days += `<div class="next_date">${j}</div>`;
        dayInCurrentMonth.innerHTML = days;
    }
}

var prev = document.querySelector(".prev");
if (prev !== "null"){
    prev.addEventListener('click', function(){
        date.setMonth(date.getMonth() -1 );
        calendarScript();
    })
}

var next = document.querySelector(".next");
if(next !== "null"){
    next.addEventListener('click', function(){
        date.setMonth(date.getMonth() + 1);
        calendarScript();
    })
}

calendarScript();