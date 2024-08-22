import { dataQuestions } from "./data-quiz.js";

const container = document.querySelector('.js-qa-container');
const statusText = document.querySelector('.status-text');
let index = 0;

function loadPage() {
	generateQuestions();
	function generateQuestions() {
		const data = dataQuestions[index];
		const html = `
			<div class="questions">${data.question}</div>
			<div class="choices">
				${choices(data)}
			</div>
		`;
		container.innerHTML = html;
		return html;
	};
	

	function choices(questions) {
		let html = '';
		questions.answers.forEach((answer, i) => {	
			html += `
				<input type="radio" name="answer" class="inputs js-inputs" data-option-id="${i}">
				<div>
					${answer}
				</div>
			`;
		});
		return html;
	};

	document.querySelectorAll(`.js-inputs`).forEach((inputs) => {
		inputs.addEventListener('click' ,() => {
			const optionId = inputs.dataset.optionId;
			const data = dataQuestions[index];

			if (data.correct === optionId) {
				statusText.innerHTML = 'Correct';
				if (index === 9) {
					container.innerHTML = 'Humana Congrahahahats';
					statusText.innerHTML = '';
					return;
				}
				index++;
				loadPage();
			} else {
				statusText.innerHTML = 'Wrohohong';
			};
		});
	});
};
loadPage();