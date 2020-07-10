var hr = 0;
var min = 0;
var sec = 0;
var milisec = 0;

var hrHead = document.getElementById("hr");
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var milisecHead = document.getElementById("milisec");

var interval;

function watch(){
    milisec++
    milisecHead.innerHTML = milisec

    if(milisec >= 100){
        sec++
        secHead.innerHTML = sec
        milisec = 0;
    }else if(sec >= 60){
        min++
        minHead.innerHTML = min
        sec = 0;
    }else if(min >= 60){
        hr++
        hrHead.innerHTML = hr
        min = 0;
    }
}

function start(){
    interval = setInterval(watch,10)
    document.getElementById('start').disabled=true
}

function pause(){
    clearInterval(interval);
    document.getElementById('start').disabled=false
}

function reset(){
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    hrHead.innerHTML = hr;
    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    milisecHead.innerHTML = milisec;
    pause();
}

