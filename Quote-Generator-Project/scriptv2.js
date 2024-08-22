import { quotes } from "./data-quotesv2.js";

const quoteContainer = document.querySelector('.js-quotes');
const name = document.querySelectorAll('.js-name');
const email = document.querySelector('.js-email');
let index = 0;

document.querySelector('.js-generate-button').addEventListener('click', () => {
	if (!quotes[index]) {
		name.forEach(names => names.innerHTML = 'Aldred M.');
		email.innerHTML = 'aldredm@gmail.com';
		quoteContainer.innerHTML = "That's All, Ngita Pakog lain";
		return;
	}
	const data = quotes[index];
	quoteContainer.innerHTML = data.quote;

	name.forEach(names => names.innerHTML = data.author);
	email.innerHTML = data.email;
	index++;
});