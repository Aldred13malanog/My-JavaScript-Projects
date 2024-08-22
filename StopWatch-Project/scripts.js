const time = document.querySelector('.time');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function startTime() {
	stopTime();
	interval = setInterval(updateTime, 1000);
}

function updateTime() {
	seconds++;
	if (seconds > 59) {
		seconds = 0;
		minutes++;
		if (minutes > 59) {
			minutes = 0;
			hours++;
		}
	}

	time.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTime() {
	clearInterval(interval);
}
function resetTime() {
	time.innerText = '00:00:00';
	hours = 0;
	minutes = 0;
	seconds = 0;
}

startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime);