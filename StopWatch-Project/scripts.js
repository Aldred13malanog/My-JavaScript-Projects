const time = document.querySelector('.time');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function startTime() {
	stopTime();
	interval = setInterval(updateTime, 10);
}

function updateTime() {
	milliseconds++;
	if (milliseconds > 99) {
		milliseconds = 0;
		seconds++;
		if (seconds > 59) {
			seconds = 0;
			minutes++;
			if (minutes > 59) {
				minutes = 0;
				hours++;
			}
		}
	}
	

	time.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}

function stopTime() {
	clearInterval(interval);
}
function resetTime() {
	time.innerText = '00:00:00.00';
	hours = 0;
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
}

startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime);

let toggle = false;
document.body.addEventListener('keyup', (event) => {
	if (event.key == " " && !toggle) {
		startTime();
		toggle = true;
	} else {
		stopTime();
		toggle = false;
	}
})