const datas = [{
	texts: 'I would also like to say blalalbaa',
	from: 'Rosetta Q'
}, {
	texts: `Your present circumstances don't determine where you can go; they just determine where you start.`,
	from: 'Aldred M'
}, {
	texts: `Life is 10% what happens to you and 90% how you react to it.`,
	from: 'Charles R.'
}];

const text = document.querySelector('p');
const author = document.querySelector('.name');
let index = 0;


function testimonialTexts() {
	if (index > datas.length - 1) {
		index = 0;
	}
	text.innerHTML = datas[index].texts;
	author.innerHTML = datas[index].from;
	index++;
}

setInterval(testimonialTexts, 5000);