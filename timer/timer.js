let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');

let seconds = 0;
let interval;

function updateTime() {
    seconds++;
    timer.textContent = `${seconds.toString()} sec`;
}

startBtn.addEventListener('click', () => {
    interval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
});

