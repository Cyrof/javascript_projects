//function to display book room page
function showBookIn(){
    var click = document.getElementsByClassName("book-room-container");
    click[0].style.display = "block";
}

//function to close book room page
function hideBookIn(){
    var click = document.getElementsByClassName("book-room-container");
    click[0].style.display = "none";
}

//function to show/hide calendar
function showCalendar(num){
    var click = document.getElementsByClassName("calendar");
    click.style.display = "block";
    // if (num === 0){
    //     click.style.display = "none";
    // }
    // else{
    //     click.style.display = "block";
    // }
}
