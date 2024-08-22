const time = document.querySelector('.time');
const start = document.querySelector('.start-btn');
const stop = document.querySelector('.stop-btn');
const reset = document.querySelector('.reset-btn');

let minutes = 25;
let seconds = 0;
let interval;

function startTime() {
	// clearInterval(interval);
	stopTime();
	interval = setInterval(updateTime, 1000);
}

function updateTime() {
	if (minutes === 0 && seconds === 0) {
		alert('Time is Up');
		clearInterval(interval);
		return;
	}

	if (seconds <= 59 && seconds !== 0) {
		seconds--;
	} else {
		minutes--;
		seconds = 59;
	}	
	
	time.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTime() {
	clearInterval(interval);
}

function resetTime() {
	time.innerText = '25:00';
	minutes = 25;
	seconds = 0;
}

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);
reset.addEventListener('click', resetTime);