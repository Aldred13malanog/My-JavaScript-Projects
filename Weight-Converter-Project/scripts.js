const lbInp = document.querySelector('.lb-inp');
const kgInp = document.querySelector('.kg-inp');
const spaceElem = document.querySelector('.space');

/*
	Formulas:

		kg to pounds: 
			p = kg * 2.20462
		
		pounds to kg:
			kg = p * 0.453592
*/

function calculateLb() {
	const pounds = lbInp.value;

	const result = pounds * 0.453592;
	spaceElem.innerHTML = `
	<div>Pounds: ${lbInp.value}lb</div>
	<div>Kilograms: ${result}kg</div>	`;
}

function calculateKg() {
	const kilograms = kgInp.value;

	const result = kilograms * 2.20462;
	spaceElem.innerHTML = `
	<div>Pounds: ${result.toFixed(5)}lb</div>
	<div>Kilograms: ${kgInp.value}kg</div>	`;
}

lbInp.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		calculateLb();
		setTimeout(() => {
			lbInp.value = '';
		}, 3000)
	}
});

kgInp.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		calculateKg();
		setTimeout(() => {
			kgInp.value = '';
		}, 3000)
	}
});