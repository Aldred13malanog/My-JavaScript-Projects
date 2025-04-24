let grids = [
	["", "", "", ""],
	["", "", "", ""],
	["", "", "", ""],
	["", "", "", ""]
];
let num = 0;
let random = 2;
let range = 5;

randomNum();
printGrid();
function printGrid() {
	let html = '';
	let num = 0;

	grids.forEach((grid) => {
		grid.forEach(cell => {
			html += `
				<div class="cell cell${num++}">${cell}</div>
			`;
		})
	})
	document.querySelector('.grids').innerHTML = html;
}

function moveUp() {
	grids.forEach((grid, i) => {
		const col1 = grid[0];
		const col2 = grid[1];
		const col3 = grid[2];
		const col4 = grid[3];

		moveUpFunction(col1, i, 0);
		moveUpFunction(col2, i, 1);
		moveUpFunction(col3, i, 2);
		moveUpFunction(col4, i, 3);
	});
	checkWinner();
	try {
		randomNum();
	} catch (error) {
		console.log('GameOver');
		return;
	}
	printGrid();
}

function moveDown() {
	const gridCopy = grids.slice().reverse();
	gridCopy.forEach((grid, i) => {
		const col1 = grid[0];
		const col2 = grid[1];
		const col3 = grid[2];
		const col4 = grid[3];
		
		moveDownFunction(gridCopy, col1, i, 0);
		moveDownFunction(gridCopy, col2, i, 1);
		moveDownFunction(gridCopy, col3, i, 2);
		moveDownFunction(gridCopy, col4, i, 3);
	});
	grids = gridCopy.reverse();

	checkWinner();
	try {
		randomNum();
	} catch (error) {
		console.log('GameOver');
		return;
	}
	printGrid();
}

function moveLeft() {
	grids.forEach((grid, i) => {
		const row1 = grids[0][i];
		const row2 = grids[1][i];
		const row3 = grids[2][i];
		const row4 = grids[3][i];

		moveLeftFunction(row1, i, 0);
		moveLeftFunction(row2, i, 1);
		moveLeftFunction(row3, i, 2);
		moveLeftFunction(row4, i, 3);
	});

	checkWinner();
	try {
		randomNum();
	} catch (error) {
		console.log('GameOver');
		return;
	}
	printGrid();
}

function moveRight() {
	for (let i = 3; i >= 0; i--) {
		const row1 = grids[0][i];
		const row2 = grids[1][i];
		const row3 = grids[2][i];
		const row4 = grids[3][i];
		
		moveRightFunction(row1, i, 0);
		moveRightFunction(row2, i, 1);
		moveRightFunction(row3, i, 2);
		moveRightFunction(row4, i, 3);
	}

	checkWinner();
	try {
		randomNum();
	} catch (error) {
		console.log('GameOver');
		return;
	}
	printGrid();
}

function moveUpFunction(cell, i, col) {
	if (cell != '') {
		if (i == 0) return;
		
		if (i == 1) {
			if (grids[0][col] == '') {
				grids[0][col] = cell;
				grids[1][col] = '';
				return;
			}
			if (grids[0][col] == cell) {
				let sum = Number(grids[0][col]) + Number(cell);
				grids[0][col] = sum.toString();
				grids[i][col] = '';
			}
		}

		if (i == 2) {
			if (grids[1][col] == '') {
				if (grids[0][col] == '') {
					grids[0][col] = cell;
					grids[2][col] = '';
					return;
				} else if (grids[0][col] == cell) {
					let sum = Number(grids[0][col]) + Number(cell);
					grids[0][col] = sum.toString();
					grids[i][col] = '';
					return;
				}
				grids[1][col] = cell;
				grids[2][col] = '';
			} else if (grids[1][col] == cell) {
				let sum = Number(grids[1][col]) + Number(cell);
				if (sum == grids[0][col]) {
					sum = sum + Number(grids[0][col]);
					grids[0][col] = sum.toString();
					grids[1][col] = '';
					grids[2][col] = '';
					return;
				}
				grids[1][col] = sum.toString();
				grids[i][col] = '';
			}
		}

		if (i == 3) {
			if (grids[2][col] == '') {
				if (grids[1][col] == '') {
					if (grids[0][col] == '') {
						grids[0][col] = cell;
						grids[3][col] = '';
						return;
					} else if (grids[0][col] == cell) {
						let sum = Number(grids[0][col]) + Number(cell);
						grids[0][col] = sum.toString();
						grids[i][col] = '';
						return;
					}
					grids[1][col] = cell;
					grids[3][col] = '';
					return;
				} else if (grids[1][col] == cell) {
					let sum = Number(grids[1][col]) + Number(cell);
					if (sum == grids[0][col]) {
						sum = sum + Number(grids[0][col]) 
						grids[0][col] = sum.toString();
						grids[1][col] = '';
						grids[2][col] = '';
						grids[3][col] = '';
						return;
					}
					grids[1][col] = sum.toString();
					grids[i][col] = '';
					return;
				}
				grids[2][col] = cell;
				grids[3][col] = '';
			} else if (grids[2][col] == cell) {
				let sum = Number(grids[2][col]) + Number(cell);
				if (sum == grids[1][col]) {
					sum = sum + Number(grids[1][col]);
					grids[1][col] = sum.toString();
					grids[2][col] = '';
					grids[3][col] = '';
					return;
				}
				grids[2][col] = sum.toString();
				grids[i][col] = '';
			}
		}
		
	}

}

function moveDownFunction(grids, cell, i, col) {
	if (cell != '') {
		if (i == 0) return;
		
		if (i == 1) {
			if (grids[0][col] == '') {
				grids[0][col] = cell;
				grids[1][col] = '';
				return;
			}
			if (grids[0][col] == cell) {
				let sum = Number(grids[0][col]) + Number(cell);
				grids[0][col] = sum.toString();
				grids[i][col] = '';
			}
		}

		if (i == 2) {
			if (grids[1][col] == '') {
				if (grids[0][col] == '') {
					grids[0][col] = cell;
					grids[2][col] = '';
					return;
				} else if (grids[0][col] == cell) {
					let sum = Number(grids[0][col]) + Number(cell);
					grids[0][col] = sum.toString();
					grids[i][col] = '';
					return;
				}
				grids[1][col] = cell;
				grids[2][col] = '';
			} else if (grids[1][col] == cell) {
				let sum = Number(grids[1][col]) + Number(cell);
				if (sum == grids[0][col]) {
					sum = sum + Number(grids[0][col]);
					grids[0][col] = sum.toString();
					grids[1][col] = '';
					grids[2][col] = '';
					return;
				}
				grids[1][col] = sum.toString();
				grids[i][col] = '';
			}
		}

		if (i == 3) {
			if (grids[2][col] == '') {
				if (grids[1][col] == '') {
					if (grids[0][col] == '') {
						grids[0][col] = cell;
						grids[3][col] = '';
						return;
					} else if (grids[0][col] == cell) {
						let sum = Number(grids[0][col]) + Number(cell);
						grids[0][col] = sum.toString();
						grids[i][col] = '';
						return;
					}
					grids[1][col] = cell;
					grids[3][col] = '';
					return;
				} else if (grids[1][col] == cell) {
					let sum = Number(grids[1][col]) + Number(cell);
					if (sum == grids[0][col]) {
						sum = sum + Number(grids[0][col]) 
						grids[0][col] = sum.toString();
						grids[1][col] = '';
						grids[2][col] = '';
						grids[3][col] = '';
						return;
					}
					grids[1][col] = sum.toString();
					grids[i][col] = '';
					return;
				}
				grids[2][col] = cell;
				grids[3][col] = '';
			} else if (grids[2][col] == cell) {
				let sum = Number(grids[2][col]) + Number(cell);
				if (sum == grids[1][col]) {
					sum = sum + Number(grids[1][col]);
					grids[1][col] = sum.toString();
					grids[2][col] = '';
					grids[3][col] = '';
					return;
				}
				grids[2][col] = sum.toString();
				grids[i][col] = '';
			}
		}
		
	}

}

function moveLeftFunction(cell, i, row) {
	if (cell != '') {
		if (i == 0) return;
		
		if (i == 1) {
			if (grids[row][0] == '') {
				grids[row][0] = cell;
				grids[row][1] = '';
				return;
			}
			if (grids[row][0] == cell) {
				let sum = Number(grids[row][0]) + Number(cell);
				grids[row][0] = sum.toString();
				grids[row][i] = '';
			}
		}

		if (i == 2) {
			if (grids[row][1] == '') {
				if (grids[row][0] == '') {
					grids[row][0] = cell;
					grids[row][2] = '';
					return;
				} else if (grids[row][0] == cell) {
					let sum = Number(grids[row][0]) + Number(cell);
					grids[row][0] = sum.toString();
					grids[row][i] = '';
					return;
				}
				grids[row][1] = cell;
				grids[row][2] = '';
			} else if (grids[row][1] == cell) {
				let sum = Number(grids[row][1]) + Number(cell);
				if (sum == grids[row][0]) {
					sum = sum + Number(grids[row][0]);
					grids[row][0] = sum.toString();
					grids[row][1] = '';
					grids[row][2] = '';
					return;
				}
				grids[row][1] = sum.toString();
				grids[row][i] = '';
			}
		}

		if (i == 3) {
			if (grids[row][2] == '') {
				if (grids[row][1] == '') {
					if (grids[row][0] == '') {
						grids[row][0] = cell;
						grids[row][3] = '';
						return;
					} else if (grids[row][0] == cell) {
						let sum = Number(grids[row][0]) + Number(cell);
						grids[row][0] = sum.toString();
						grids[row][i]= '';
						return;
					}
					grids[row][1] = cell;
					grids[row][3] = '';
					return;
				} else if (grids[row] [1]== cell) {
					let sum = Number(grids[row][1]) + Number(cell);
					if (sum == grids[row][0]) {
						sum = sum + Number(grids[row][0]) 
						grids[row] [0]= sum.toString();
						grids[row][1] = '';
						grids[row][2] = '';
						grids[row][3] = '';
						return;
					}
					grids[row][1] = sum.toString();
					grids[row][i] = '';
					return;
				}
				grids[row][2] = cell;
				grids[row][3] = '';
			} else if (grids[row][2] == cell) {
				let sum = Number(grids[row][2]) + Number(cell);
				if (sum == grids[row][1]) {
					sum = sum + Number(grids[row][1]);
					grids[row][1] = sum.toString();
					grids[row][2] = '';
					grids[row][3] = '';
					return;
				}
				grids[row][2] = sum.toString();
				grids[row][i] = '';
			}
		}
		
	}

}

function moveRightFunction(cell, i, row) {
	if (cell != '') {
		if (i == 0) {
			if (grids[row][1] == '') {
				if (grids[row][2] == '') {
					if (grids[row][3] == '') {
						grids[row][3] = cell;
						grids[row][0] = '';
						return;
					} else if (grids[row][3] == cell) {
						let sum = Number(grids[row][3]) + Number(cell);
						grids[row][3] = sum.toString();
						grids[row][i]= '';
						return;
					}
					grids[row][2] = cell;
					grids[row][0] = '';
					return;
				} else if (grids[row][2]== cell) {
					let sum = Number(grids[row][2]) + Number(cell);
					if (sum == grids[row][3]) {
						sum = sum + Number(grids[row][3]) 
						grids[row][3]= sum.toString();
						grids[row][2] = '';
						grids[row][1] = '';
						grids[row][0] = '';
						return;
					}
					grids[row][2] = sum.toString();
					grids[row][i] = '';
					return;
				}
				grids[row][1] = cell;
				grids[row][0] = '';
			} else if (grids[row][1] == cell) {
				let sum = Number(grids[row][1]) + Number(cell);
				if (sum == grids[row][2]) {
					sum = sum + Number(grids[row][2]);
					grids[row][2] = sum.toString();
					grids[row][1] = '';
					grids[row][0] = '';
					return;
				}
				grids[row][1] = sum.toString();
				grids[row][i] = '';
			}
		}

		if (i == 1) {
			if (grids[row][2] == '') {
				if (grids[row][3] == '') {
					grids[row][3] = cell;
					grids[row][1] = '';
					return;
				} else if (grids[row][3] == cell) {
					let sum = Number(grids[row][3]) + Number(cell);
					grids[row][3] = sum.toString();
					grids[row][i] = '';
					return;
				}
				grids[row][2] = cell;
				grids[row][1] = '';
			} else if (grids[row][2] == cell) {
				let sum = Number(grids[row][2]) + Number(cell);
				if (sum == grids[row][3]) {
					sum = sum + Number(grids[row][3]);
					grids[row][3] = sum.toString();
					grids[row][2] = '';
					grids[row][1] = '';
					return;
				}
				grids[row][2] = sum.toString();
				grids[row][i] = '';
			}
		}

		if (i == 2) {
			if (grids[row][3] == '') {
				grids[row][3] = cell;
				grids[row][2] = '';
				return;
			}
			if (grids[row][3] == cell) {
				let sum = Number(grids[row][3]) + Number(cell);
				grids[row][3] = sum.toString();
				grids[row][2] = '';
			}
		}

		if (i == 3) return;
		
	}

}

function randomNum() {
	const rows = Math.floor(Math.random() * 4);
	const columns = Math.floor(Math.random() * 4);

	if (grids[rows][columns] == '') {
		grids[rows][columns] = random;
		num++;
		if (num == range) {
			random *= 2;
			num = 0;
			range *= 3;
		}
	} else {
		randomNum();
	}
}

function checkWinner() {
	for (let i = 0; i < grids.length; i++) {
		const grid = grids[i];
		for (let j = 0; j < grid.length; j++) {
			const cell = grid[j];
			if (cell == 2048) {
				alert('Congraturlation You Win!');
			}
		}			
	}
}

document.querySelector('.w').addEventListener('click', moveUp);
document.querySelector('.a').addEventListener('click', moveLeft);
document.querySelector('.s').addEventListener('click', moveDown);
document.querySelector('.d').addEventListener('click', moveRight);

document.body.addEventListener('keydown', (event) => {
	if (event.key == 'w') {
		moveUp();
	}
	if (event.key == 'a') {
		moveLeft();
	}
	if (event.key == 's') {
		moveDown();
	}
	if (event.key == 'd') {
		moveRight();
	}
})