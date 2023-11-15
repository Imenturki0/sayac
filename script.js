let seconds = 0;
let minutes = 0;
let timerInterval;
let timerRunning = false;

function updateTimerDisplay() {
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
}

document.getElementById('startButton').addEventListener('click', function() {
    if (!timerRunning) {
        timerInterval = setInterval(function() {
            seconds++;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
            updateTimerDisplay();
        }, 1000);
        timerRunning = true;
    }
});

document.getElementById('pauseButton').addEventListener('click', function() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
    } else {
        timerInterval = setInterval(function() {
            seconds++;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
            updateTimerDisplay();
        }, 1000);
        timerRunning = true;
    }
});
