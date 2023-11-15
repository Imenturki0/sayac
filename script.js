document.getElementById('startButton').addEventListener('click', function() {
    let seconds = 0;
    let minutes = 0;
    setInterval(function() {
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    }, 1000);
});