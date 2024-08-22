const billInp = document.querySelector('.bill-input');
const tipInp = document.querySelector('.tip-input');
const calculateBtn = document.querySelector('button');
const total = document.querySelector('.total-amount');

total.innerHTML = `Total: <span>$0.00</span>`;

function calculate() {
	const bill = Number(billInp.value);
	const tip = Number(tipInp.value);
	const totalValue = bill + (bill * (tip / 100));

	total.innerHTML = `Total: <span>$${totalValue.toFixed(2)}</span>`;
}

calculateBtn.addEventListener('click', calculate);
document.body.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		calculate();
	}
});