function appendZero(num) {
    if (num < 10)
        return `0${num}`;
    else
        return num;

}

//# Date and Time section

var today = new Date();
var h = today.getHours();
var amPM = h > 12 ? "PM" : 'AM';
h = h > 12 ? h - 12 : h;

document.getElementById('time').innerHTML = appendZero(h) + ":" + appendZero(today.getMinutes()) + ":" + appendZero(today.getSeconds()) + " " + "<sup><small>" + amPM + "</small> </sup>";

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = days[today.getDay()];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Month = months[today.getMonth()];


document.getElementById('date').innerHTML = day + ',' + Month + ',' + today.getFullYear();