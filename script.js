const contactBubble = document.querySelector('.bubble-contact-me');
const bubbleContactText = document.querySelector('.bubble-contact-text');
const bubbleContactEmail = document.querySelector('.bubble-contact-email');

const textContainer = document.querySelector('.text_content');
const mainHeading = document.querySelector('.main-heading');
const subHeading = document.querySelector('.sub-heading');
const hoverCan = document.querySelector('.container-animation');
const canZero = document.querySelector('.can-zero');
const canDiet = document.querySelector('.can-diet');
const canLemon = document.querySelector('.can-lemon');
const thoughtBubble = document.querySelector('.thought-bubble');
const themeSelectorLight = document.querySelector('.page_theme_light');
const themeSelectorDark = document.querySelector('.page_theme_dark');
const bubblingBackground = document.querySelector('.bubbling_background');
const pictureBackground = document.querySelector('.picture_background');
const textBackground = document.querySelector('.text-background');

const themeDark = true;
// animation Text

// link buttons

contactBubble.addEventListener('mouseover', showBubble);
contactBubble.addEventListener('mouseout', hideBubble);
textContainer.addEventListener('mouseover', textHighlight);
textContainer.addEventListener('mouseout', textStopHighlight);
hoverCan.addEventListener('mouseover', canHover);
hoverCan.addEventListener('mouseout', canRemoveHover);
hoverCan.addEventListener('click', dietGeoffBreak);
themeSelectorLight.addEventListener('click', applyThemeLight);
themeSelectorDark.addEventListener('click', applyThemeDark);

function applyThemeLight() {}

function applyThemeDark() {}

function dietGeoffBreak() {
	// bubblingBackground.classList.add('background-hidden');
	pictureBackground.classList.remove('background-hidden');
	mainHeading.classList.add('highlight-text');
	subHeading.classList.add('shadow-text');
	canZero.classList.add('can-hidden');
	thoughtBubble.classList.add('thought-bubble-hidden');
	canDiet.classList.remove('can-hidden');
	textBackground.classList.remove('text-background-hidden');

	setTimeout(() => {
		// bubblingBackground.classList.remove('background-hidden');
		pictureBackground.classList.add('background-hidden');
		mainHeading.classList.remove('highlight-text');
		subHeading.classList.remove('shadow-text');
		canZero.classList.remove('can-hidden');
		canDiet.classList.add('can-hidden');
		thoughtBubble.classList.remove('thought-bubble-hidden');
		textBackground.classList.add('text-background-hidden');
	}, 29000);
}

function canHover() {
	canZero.classList.add('can-hover');
	thoughtBubble.classList.add('thought-bubble-hover');
}

function canRemoveHover() {
	canZero.classList.remove('can-hover');
	thoughtBubble.classList.remove('thought-bubble-hover');
}

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

setInterval(createBubbles, 1);
