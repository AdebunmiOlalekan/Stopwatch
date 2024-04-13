var timer ;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer(){
    timer = setInterval(updateDisplay,60);
}
function updateDisplay(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
      minutes++
    if (minutes === 60){
        minutes = 0;
        hours++;
    }
}
    var display=document.getElementById("display");
display.innerHTML=formatTime(hours)+ ":"+formatTime(minutes)+ ":"+ formatTime(seconds) ;
}

function formatTime(time){
    return(time < 10 ? "0" : "") + time;
}
function pauseTimer(){
    clearInterval(timer);
    
}
function resetTimer(){
   clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours= 0;
    updateDisplay();
}

document.getElementById("startbtn").addEventListener("click", startTimer);
document.getElementById("resetbtn").addEventListener("click", resetTimer);
document.getElementById("pausebtn").addEventListener("click", pauseTimer);
