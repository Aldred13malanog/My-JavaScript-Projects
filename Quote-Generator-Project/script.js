import { quotes } from "./data-quotes.js";

let index = 0;

document.querySelector('.js-generate-button').addEventListener('click', () => {
	const quoteContainer = document.querySelector('.js-quotes');
	if (!quotes[index]) {
		quoteContainer.innerHTML = "That's All, Ngita Pakog lain";
		return;
	}
	quoteContainer.innerHTML = quotes[index];
	index++;
});