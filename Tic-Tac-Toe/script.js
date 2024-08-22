const statusText = document.querySelector('.status-text');
const grids = [
	['', '', ''],
	['', '', ''],
	['', '', '']
];
let finish = false;

let currentPlayer = 'X';
let options = ['', '', '', '', '', '', '', '', ''];
const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
];



printGrid();
function printGrid() {
	let html = '';

	grids.forEach((grid) => {
		grid.forEach((cell) => {
			html += `
				<div class="cell"></div>
			`;
		});
	});
	document.querySelector('.grid').innerHTML = html;
	statusText.innerHTML = `${currentPlayer}'s turn`;
	cellClick();
}

function cellClick() {
	document.querySelectorAll('.cell').forEach((cells, i) => {
		cells.addEventListener('click', () => {
			if (finish) {
				return;
			}

			if (cells.innerText === 'X' || cells.innerText === 'O') {
				return;
			}
			cells.innerText = currentPlayer;
			options[i] = currentPlayer;
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
			statusText.innerHTML = `${currentPlayer}'s turn`;
			checkWinner();
		});
	});				
}

function checkWinner() {
	let win = false;

	for (let i = 0; i < winConditions.length; i++) {
		const condition = winConditions[i];
		const cellA = options[condition[0]];
		const cellB = options[condition[1]];
		const cellC = options[condition[2]];

		if (cellA == "" || cellB == "" || cellC == ""){
			continue;
		}

		if (cellA == cellB && cellB == cellC) {
			win = true;
			finish = true;
			break;
		}
	}

	if (win) {
		statusText.innerHTML = `${currentPlayer == 'O' ? 'X' : 'O'} wins`;
		win = false;
	} else if (!options.includes('')) {
		statusText.innerHTML = `Draw`;
		win = false;
	}
	
}

function restartGame() {
	options = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	finish = false;
	statusText.innerHTML = '';
	printGrid();
	cellClick();
}

document.querySelector('.restart-button').addEventListener('click', restartGame);