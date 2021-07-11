
/*make div clickable*/
function clickDate(event) {
    try {
        // var e to store text content of clicked date
        var e = event.target.id;
    } catch (e) {
        console.log(TypeError);
    }
    //get all child from div .days
    var all = document.querySelector(".days").children;

    //for loop to find current today date and remove highlight
    for (x = 0; x < all.length; x++) {
        if (all[x].className.includes('today')) {
            var id = all[x].id
            var change1 = document.querySelector(`[id=${CSS.escape(id)}]`);
            change1.classList.remove(`${all[x].className}`);
            break;
        }
    }

    //for loop to find new clicked date and set it to highlighted date
    for (i = 0; i < all.length; i++) {
        if (all[i].id === e) {
            var newid = all[i].id;
            var change2 = document.querySelector(`[id=${CSS.escape(newid)}]`);
            change2.classList.add("today");
            break;
        }
    }


    for (j = 0; j < all.length; j++) {
        if (all[j].className.includes('today') && all[j].className.includes('next')) {
            date.setMonth(date.getMonth() + 1);
            calendarScript();
            setnewtoday(all, e);
        }
        else if (all[j].className.includes('today') && all[j].className.includes('prev')) {
            date.setMonth(date.getMonth() - 1);
            calendarScript();
            setnewtoday(all, e);
        }
    }
}

function setnewtoday(list, e) {
    if (e.includes('prev')) {
        e = e.replace('prev', 'current');
        console.log(e);
    }
    else if (e.includes('next')) {
        e = e.replace('next', 'current');
        console.log(e);
    }

    for (j = 0; j < list.length; i++) {
        if (list[j].className.includes('today')) {
            var choice = true;
            break;
        } else {
            choice = false;
        }
    }

    if (choice !== true) {
        for (i = 0; i < list.length; i++) {
            if (list[i].id === e) {
                var id = list[i].id;
                var newtoday = document.querySelector(`[id=${CSS.escape(id)}]`);
                newtoday.classList.add('today');
                break;
            }
        }
    }
}



/*make calendar hiddem*/
function hide() {
    var x = document.querySelector(".container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


/*Calendar*/

//create date obj
var date = new Date();




var calendarScript = () => {
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
    var months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    //set .date h1  and .date p text to month dynamically using js
    document.querySelector(".date h1").innerHTML = months[monthIndex];
    document.querySelector(".date p").innerHTML = new Date().toDateString();

    //set days to empty string
    var days = "";

    //for loop to get prev month dates
    for (x = firstDayOfMonthIndex; x > 0; x--) {
        var prev = prevLast - x + 1;
        days += `<div class="prev_date" id='prev-${prev}'>${prev}</div>`;
    }

    // for loop to get the current month dates
    for (i = 1; i <= daysInMonth; i++) {
        if (i === compareDate.getDate() && date.getMonth() === compareDate.getMonth()) {
            days += `<div class="today" id="current-${i}">${i}</div>`;
        } else {
            days += `<div id="current-${i}">${i}</div>`;
        }
    }

    // for loop to get next months dates
    for (j = 1; j <= nextDays; j++) {
        days += `<div class="next_date" id="next-${j}">${j}</div>`;
        dayInCurrentMonth.innerHTML = days;
    }
}

var prev = document.querySelector(".prev");
if (prev !== "null") {
    prev.addEventListener('click', function () {
        date.setMonth(date.getMonth() - 1);
        calendarScript();
    })
}



var next = document.querySelector(".next");
if (next !== "null") {
    next.addEventListener('click', function () {
        date.setMonth(date.getMonth() + 1);
        calendarScript();
    })
}



calendarScript();

