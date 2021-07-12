//function to check click
function checkclick(){
    /* if (clickDate){
        console.log('hi');
    } */
}

//function to check if current month is same as system current month 
function check() {
    var allchild = document.querySelector(".days").children;

    // check if month is same as current system month 
    if (date.getMonth() === new Date().getMonth()) {
        for (f = 0; f < allchild.length; f++) {
            if (allchild[f].className.includes('today')) {
                var selectchild = document.querySelector(`[id=${CSS.escape(allchild[f].id)}]`);
                currentDate.setMonth(new Date().getMonth());
                currentDate.setDate(selectchild.textContent);
                calendarScript();
                break;
            }
        }
    }
}

//function to get the date from the clicked div
function setDateforCal() {
    var all = document.querySelector(".days").children;

    for (p = 0; p < all.length; p++) {
        if (all[p].className.includes('today')) {
            var divtext = document.querySelector(`[id=${CSS.escape(all[p].id)}]`);
            divtext = divtext.textContent;
            break;
        }
    }
    return divtext;
}

//function to set date for the calendar
var currentDate = new Date();
function disDate() {
    var calendarDate = document.querySelector('.date p');
    calendarDate.innerHTML = currentDate.toDateString();
}

/* set the class of the clicked div to today */
function setToday(e) {


    // get the children from .days div 
    var child = document.querySelector(".days").children;

    //for loop to find which div contains class = "today" and remove it 
    for (x = 0; x < child.length; x++) {
        if (child[x].className.includes('today')) {
            var id = child[x].id;
            var change1 = document.querySelector(`[id=${CSS.escape(id)}]`);
            change1.classList.remove(`${child[x].className}`);
            break;
        }
    }

    //for loop to find which div is clicked and set the class to .today
    for (i = 0; i < child.length; i++) {
        if (child[i].id === e) {
            var newid = child[i].id;
            var change2 = document.querySelector(`[id=${CSS.escape(newid)}]`);
            change2.classList.add('today');
            break;
        }
    }
}

//function to move the months if prev or next month dates were clicked
function moveToNextMonth(e) {
    var datenow = setDateforCal();

    //get the children of .days div
    var all = document.querySelector(".days").children;

    //for loop to check if next or prev month dates are clicked then move accordingly
    for (j = 0; j < all.length; j++) {
        // if else to check if the date clicked is next or prev months
        if (all[j].className.includes('today') && all[j].className.includes('next')) {
            currentDate.setMonth(date.getMonth() + 1);
            currentDate.setDate(datenow);
            disDate();
            date.setMonth(date.getMonth() + 1);
            calendarScript();
            setnewtoday(all, e);
        }
        else if (all[j].className.includes('today') && all[j].className.includes('prev')) {
            currentDate.setMonth(date.getMonth() - 1);
            currentDate.setDate(datenow);
            disDate();
            date.setMonth(date.getMonth() - 1);
            calendarScript();
            setnewtoday(all, e);
        }
        else {
            currentDate.setMonth(date.getMonth());
            currentDate.setDate(datenow);
            disDate();
        }
    }
}


/*make div clickable*/
function clickDate(event) {
    try {
        // var e to store text content of clicked date
        var e_id = event.target.id;
    } catch (e_id) {
        console.log(TypeError);
    }

    if (e_id !== "") {
        setToday(e_id);
        moveToNextMonth(e_id);
        write();
    }
}

//function to set .today class if the current month already has a .today class in another div
function setnewtoday(list, e) {
    //if else statement to check if the div id contains keyword "prev" or "next"
    if (e.includes('prev')) {
        e = e.replace('prev', 'current');
    }
    else if (e.includes('next')) {
        e = e.replace('next', 'current');
    }

    //for loop to check if any child div contains .today class
    for (j = 0; j < list.length; j++) {
        // if else to check if div contains .today class then set choice to boolean expression
        if (list[j].className.includes('today')) {
            var choice = true;
            break;
        } else {
            choice = false;
        }
    }

    // if else to check if choice is true then set clicked date to .today class
    if (choice !== true) {
        for (i = 0; i < list.length; i++) {
            if (list[i].id === e) {
                var id = list[i].id;
                var newtoday = document.querySelector(`[id=${CSS.escape(id)}]`);
                newtoday.classList.add('today');
                /* currentDate.setDate(newtoday.textContent);
                currentDate.setMonth(date.getMonth());
                calendarScript(); */
                break;
            }
        }
    }
    else {
        setToday(e);
    }
}



/*make calendar hidden*/
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
    disDate();

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
prev.addEventListener('click', prevfunc);

function prevfunc() {
    currentDate.setMonth(date.getMonth() - 1);
    date.setMonth(date.getMonth() - 1);
    calendarScript();
    check();
    checkclick();
}
/* if (prev !== "null") {
    prev.addEventListener('click', function () {
        currentDate.setMonth(date.getMonth() - 1);
        date.setMonth(date.getMonth() - 1);
        calendarScript();
        check();
    })
} */



var next = document.querySelector(".next");
next.addEventListener('click', nextfunc);

function nextfunc() {
    currentDate.setMonth(date.getMonth() + 1);
    date.setMonth(date.getMonth() + 1);
    calendarScript();
    check();
    checkclick();
}
/* if (next !== "null") {
    next.addEventListener('click', function () {
        currentDate.setMonth(date.getMonth() + 1);
        date.setMonth(date.getMonth() + 1);
        calendarScript();
        check();
    })
} */



calendarScript();

function write() {
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var input = document.querySelector('.form-container input');
    /* var currentnow = currentDate.toString();
    console.log(currentnow); */

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }
    var format = day + '/' + month + '/' + year;

    input.value = format;
}


