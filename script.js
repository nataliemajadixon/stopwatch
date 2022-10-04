let secondsEL = document.querySelector("#seconds");
let millisecondsEL = document.querySelector("#milliseconds");
let startEl = document.querySelector("#start");
let stopEl = document.querySelector("#stop");
let resetEl = document.querySelector("#reset");

let seconds = 00;
let milliseconds = 00;

secondsEL.innerHTML = seconds;
millisecondsEL.innerHTML = milliseconds;

// startEl.onClick( function(){
//     console.log("click")

// })

function startTimer(){
    let start = setInterval(function() {seconds++}, 1000);
    secondsEL.innerHTML = start;
    console.log(start)

}
function stopTimer(){
    clearInterval(startTimer);
    console.log("click")
}


function resetTimer(){
    seconds = 00;
    milliseconds = 00;
    secondsEL.innerHTML = seconds;
    milliseconds.innerHTML = milliseconds;
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);