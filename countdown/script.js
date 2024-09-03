const elDays = document.getElementById("t-days");
const elHours = document.getElementById("t-hours");
const elMins = document.getElementById("t-mins");
const elSec = document.getElementById("t-sec");



myDate = "2025/01/01";

function countdown() {
    const targetDate = new Date(myDate);
    const currDate = new Date();
    
    const newDate = targetDate-currDate; // in ms
    const totalSeconds = newDate/1000;
    
    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    const hours = Math.floor(totalSeconds / 60 / 60) % 24;
    const mins = Math.floor(totalSeconds / 60 ) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    console.log(days, hours, mins, sec);

    elDays.innerHTML = days;
    elHours.innerHTML = formatTime(hours);
    elMins.innerHTML = formatTime(mins);
    elSec.innerHTML = formatTime(sec);

}

function formatTime (el) {
    return el < 10 ?  `0${el}` : el;
}


setInterval(countdown, 1000);