let timerDiv = document.getElementById('timer');
let valueZero = '<h3>00:00:00</h3>'
let time = {hours: 0, minutes: 0, seconds: 0}
let intervalID = 0;

window.addEventListener('load', function (event) {
  timerDiv.innerHTML = valueZero;
})

function iniciar() {
  intervalID = setInterval(function () {
    countTime();
    let res = sendRes(time);
    timerDiv.innerHTML = res
  },1000)
}

function pausar() {
  clearInterval(intervalID);
}

function zerar() {
  clearInterval(intervalID);
  time = {hours: 0, minutes: 0, seconds: 0}
  timerDiv.innerHTML = valueZero
}

function sendRes(time) {
  return `<h3>${zeroPad(time.hours)}:${zeroPad(time.minutes)}:${zeroPad(time.seconds)}</h3>`
}

function countTime() {
  time.seconds++
  if (time.seconds === 60) {
    time.seconds = 0
    time.minutes++
    if (time.minutes === 60) {
      time.minutes = 0
      time.hours++
      if (time.hours === 24) {
        pausar();
      }
    }
  }
}

function zeroPad(num){
  return num < 10 ? `0${num}` : num
}