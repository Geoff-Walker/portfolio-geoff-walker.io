const contactBubble = document.querySelector('.bubble-contact-me');
const bubbleContactText = document.querySelector('.bubble-contact-text');
const bubbleContactEmail = document.querySelector('.bubble-contact-email');

const textContainer = document.querySelector('.text_content');
const mainHeading = document.querySelector('.main-heading');
const subHeading = document.querySelector('.sub-heading');

// diet can
// zero can
// animation Text

// link buttons

// background animation
// background picture

// lemon theme button
// thought bubble

contactBubble.addEventListener('mouseover', showBubble);
contactBubble.addEventListener('mouseout', hideBubble);
textContainer.addEventListener('mouseover', textHighlight);
textContainer.addEventListener('mouseout', textStopHighlight);

function textHighlight() {
	mainHeading.classList.add('highlight-text');
	subHeading.classList.add('shadow-text');
}

function textStopHighlight() {
	mainHeading.classList.remove('highlight-text');
	subHeading.classList.remove('shadow-text');
}

function showBubble() {
	bubbleContactEmail.classList.remove('email-hidden');
	bubbleContactText.classList.add('email-hidden');
}

function hideBubble() {
	bubbleContactEmail.classList.add('email-hidden');
	bubbleContactText.classList.remove('email-hidden');
}

function createBubbles() {
	const background = document.querySelector('.bubbling_background');
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

function deleteBubbles() {}
