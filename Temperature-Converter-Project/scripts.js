const celsiusInp = document.querySelector('.cel-inp');
const fahrenheitInp = document.querySelector('.fah-inp');

/*
	Formulas:
		C to F:
			F = C * (9 / 5) + 32;

		F to C:
			C = (F - 32) * 5 / 9;
*/

function calculateFahrenheit() {
	const fahrenheit = celsiusInp.value * (9 / 5) + 32;
	fahrenheitInp.value = `${fahrenheit}°F`;
}

function calculateCelsius() {
	const celsius = (fahrenheitInp.value - 32) * 5 / 9;
	celsiusInp.value = `${celsius}°C`;
}

celsiusInp.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		calculateFahrenheit();
	}
});
fahrenheitInp.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		calculateCelsius();
	}
});