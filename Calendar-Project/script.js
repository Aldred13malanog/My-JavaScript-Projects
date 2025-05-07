const currentDate = new Date();
const daysContainer = document.querySelector('.days');
const monthElement = document.querySelector('.month');
const yearElement = document.querySelector('.year');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

renderCalendar();

prevBtn.addEventListener('click', () => {
	currentDate.setMonth(currentDate.getMonth() - 1);
	renderCalendar();
});

nextBtn.addEventListener('click', () => {
	currentDate.setMonth(currentDate.getMonth() + 1);
	renderCalendar();
});

function renderCalendar() {
	const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
	const startDay = firstDayOfMonth.getDay();
	const daysInMonth = lastDayOfMonth.getDate();

	daysContainer.innerHTML = '';

	monthElement.textContent = `${currentDate.getMonth() + 1} | ${currentDate.toLocaleString('default', {month: 'long'})}`;
	yearElement.textContent = currentDate.getFullYear();

	for (let i = 1; i <= daysInMonth + startDay; i++) {
		const dayElement = document.createElement('div');
		if (i > startDay) {
			dayElement.textContent = i - startDay;
			if (currentDate.getFullYear() === new Date().getFullYear() && 
					currentDate.getMonth() === new Date().getMonth() && 
					i - startDay === new Date().getDate()) {
						dayElement.classList.add('today');
			}
		}
		daysContainer.appendChild(dayElement);
	}
}

document.body.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowRight') {
		currentDate.setMonth(currentDate.getMonth() + 1);
		renderCalendar();
	}
	if (event.key === 'ArrowLeft') {
		currentDate.setMonth(currentDate.getMonth() - 1);
		renderCalendar();
	}
})