renderTime();
function renderTime() {
	const currentTime = new Date();
	const nameOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const formatDate = currentTime.toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	});
	const day = currentTime.getDay();
	const days = nameOfDays[day];

	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	let meridiem = 'AM';		

	seconds = seconds.toString().padStart(2, '0');
	minutes = minutes.toString().padStart(2, '0');
	
	if (hours > 12) {
		hours = hours - 12;
		meridiem = 'PM';
	}

	document.querySelector('.date').innerHTML = `${days}, ${formatDate}`;
	document.querySelector('.clock').innerHTML = `${hours}:${minutes}:${seconds} ${meridiem}`;
}
setInterval(renderTime, 100);