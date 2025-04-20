const time = document.querySelector('.time');
const start = document.querySelector('.start-btn');
const stoP = document.querySelector('.stop-btn');
const reset = document.querySelector('.reset-btn');
const message = document.querySelector('.message');

let minutes = 25;
let seconds = 0;
let breakTimeMinutes = 5;
let breakTimeSeconds = 0;
let interval;
let isActive = true;

function startTime() {
	pauseTime();
	interval = isActive ? setInterval(updateTime, 1000) : setInterval(breakTimer, 1000);
}

function updateTime() {
	if (minutes === 0 && seconds === 0) {
		message.innerText = 'Time is Up';
		clearInterval(interval);
		isActive = false;

		interval = setInterval(breakTimer, 1000);
		time.innerText = '05:00';
		message.innerText = "Break Time!"	;

		minutes = 25;
		seconds = 0;
		return;
	}

	if (seconds < 60 && seconds !== 0) {
		seconds--;
	} else {
		minutes--;
		seconds = 59;
	}	

	time.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	message.innerText = "Study Time!"	;
}

function breakTimer() {
	if (breakTimeMinutes === 0 && breakTimeSeconds === 0) {
		message.innerText = 'Break Time is Up';
		clearInterval(interval);
		isActive = true;

		interval = setInterval(updateTime, 1000);
		time.innerText = '25:00';
		message.innerText = "Study Time!";

		breakTimeMinutes = 5;
		breakTimeSeconds = 0;
		return;
	} 


	if (breakTimeSeconds < 60 && breakTimeSeconds !== 0) {
		breakTimeSeconds--;
	} else {
		breakTimeMinutes--;
		breakTimeSeconds = 59;
	}

	time.innerText = `${breakTimeMinutes.toString().padStart(2, '0')}:${breakTimeSeconds.toString().padStart(2, '0')}`;
}

function pauseTime() {
	clearInterval(interval);
}

function resetTime() {
	time.innerText = isActive ? '25:00' : '05:00';
	minutes = 25;
	seconds = 0;
	breakTimeMinutes = 5;
	breakTimeSeconds = 0;
}

start.addEventListener('click', startTime);
stoP.addEventListener('click', pauseTime);
reset.addEventListener('click', resetTime);