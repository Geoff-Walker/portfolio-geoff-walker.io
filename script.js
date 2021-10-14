function createBubbles() {
	const background = document.querySelector('.index__bubbling_background');
	const createElement = document.createElement('span');
	const createMidElement = document.createElement('span1');
	const createBrownElement = document.createElement('span2');
	let size = Math.random() * 40;

	createElement.style.width = size + 'px';
	createElement.style.height = size + 'px';
	createElement.style.left = Math.random() * innerWidth + 'px';
	background.appendChild(createElement);

	createBrownElement.style.width = size + 'px';
	createBrownElement.style.height = size + 'px';
	createBrownElement.style.left = Math.random() * innerWidth + 'px';
	background.appendChild(createBrownElement);

	createMidElement.style.width = size + 'px';
	createMidElement.style.height = size + 'px';
	createMidElement.style.left = Math.random() * innerWidth + 'px';
	background.appendChild(createMidElement);

	setTimeout(() => {
		createElement.remove();
		createBrownElement.remove();
		createMidElement.remove();
	}, 8000);
}

// setInterval(createBubbles, 0.0000001);
setInterval(createBubbles, 1);
// setInterval(createBubbles, 1);
