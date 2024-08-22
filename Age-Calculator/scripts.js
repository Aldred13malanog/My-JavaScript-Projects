const dateInp = document.querySelector('.date-input');
const ageElem = document.querySelector('.your-age');
const calculateBtn = document.querySelector('button');

function calculate() {
	const currentDate = new Date();
	const birthday = new Date(dateInp.value);
	const year = currentDate.getFullYear(), birthyear = birthday.getFullYear();
	const month = currentDate.getMonth() + 1, birthmonth = birthday.getMonth() + 1;
	const day = currentDate.getDate(), birthdays = birthday.getDate();
	let age = '';	

	if (!dateInp.value) {
		alert('Please enter your birthday')
		return;
	}

	age = year - birthyear;

	if (birthmonth > month || birthmonth === month) {
		age--;
		if ((birthmonth - month) === 0 && day >= birthdays) {
			age++;
		}
	}
	
	let yearOrMonth = age === 1 ? 'year' : 'years';

	if (age <= 0) {
		if (year === birthyear && month < birthmonth) {
			alert('Invalid Birthday');
			return;
		}
		age = month - birthmonth;

		if (year > birthyear && month <= birthmonth) {
			age = (month - birthmonth) + 12;
		}
	
		if (day < birthdays) {
			age--;
		}

		yearOrMonth = age <= 1 ? 'month' : 'months';
	}

	

	ageElem.innerHTML = `Your Age is ${age} ${yearOrMonth} old`;
}

calculateBtn.addEventListener('click', calculate);