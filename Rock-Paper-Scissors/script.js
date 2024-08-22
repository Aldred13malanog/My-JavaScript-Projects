let score = {
	wins: 0,
	losses: 0,
	ties: 0
}
let result = '';
let intervalId;
let isAutoPlaying = false;

displayScore();

function computerMove() {
	const random = Math.random();
	let move;

	if (random >= 0 && random < 1 / 3) {
		move = 'rock';
	} else if (random >= 1 / 3 && random < 2 / 3) {
		move = 'paper';
	} else if (random >= 2 / 3 && random <= 1) {
		move = 'scissors'
	}

	return move;
}

function playerMove(move) {
	const compMove = computerMove();

	if (move === 'rock') {

		if (compMove === 'rock') {
			result = 'Tie.';
			score.ties++;
		} else if (compMove === 'paper') {
			result = 'You lose.';
			score.losses++;
		} else if (compMove === 'scissors') {
			result = 'You win.'
			score.wins++;
		}
	} else if (move === 'paper') {

		if (compMove === 'rock') {
			result = 'You win.';
			score.wins++;
		} else if (compMove === 'paper') {
			result = 'Tie.';
			score.ties++;
		} else if (compMove === 'scissors') {
			result = 'You lose.'
			score.losses++;
		}
	} else if (move === 'scissors') {

		if (compMove === 'rock') {
			result = 'You lose.';
			score.losses++;
		} else if (compMove === 'paper') {
			result = 'You win.';
			score.wins++;
		} else if (compMove === 'scissors') {
			result = 'Tie.'
			score.ties++;
		}
	}

  displayScore();

	document.querySelector('.status').innerText = result;

	document.querySelector('.moves').innerHTML = `
		You <img src="images/${move}-emoji.png" alt="${move}">
		<img src="images/${compMove}-emoji.png" alt="${compMove}"> Comp
	`;
}

function displayScore() {
	document.querySelector('.scores').innerHTML = `
		Wins: ${score.wins}
		Losses: ${score.losses}
		Ties: ${score.ties}
	`;
}

function resetScore() {
	score = {
		wins: 0,
		losses: 0,
		ties: 0
	};
	displayScore();
}

function autoPlay() {
	const button =   document.querySelector('.auto-play-button');
	
	if (button.innerHTML === 'Auto Play') {
		button.innerHTML = 'Stop Playing';
	} else {
		button.innerHTML = 'Auto Play';
	}
	
	if (!isAutoPlaying) {
	  intervalId = setInterval(() => {
			const move = computerMove();
			playerMove(move);
		}, 1000)
		isAutoPlaying = true;
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
	
}




document.querySelector('.js-rock').addEventListener('click', () => {
	playerMove('rock');
});
document.querySelector('.js-paper').addEventListener('click', () => {
	playerMove('paper');
});
document.querySelector('.js-scissors').addEventListener('click', () => {
	playerMove('scissors');
});
document.querySelector('.reset-button').addEventListener('click', resetScore);
document.querySelector('.auto-play-button').addEventListener('click', autoPlay);



document.body.addEventListener('keydown', (event) => {
	if (event.key === 'r') {
		playerMove('rock');
	}
	if (event.key === 'p') {
		playerMove('paper');
	}
	if (event.key === 's') {
		playerMove('scissors');
	}
	if (event.key === 'a') {
		autoPlay();
	}
	if (event.key === 'Backspace') {
		resetScore();
	}
})