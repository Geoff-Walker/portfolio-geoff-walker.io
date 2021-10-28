////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Selectors////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////Backgrounds////////////////////////////////////////////////////////////////////////////////////

const background = document.querySelector('#bubbling_background');
const bubblingBackground = document.querySelector('.bubbling_background');
const textBackground = document.querySelector('.text-background');

////////////////////////////////////////////////////////////////////////Header////////////////////////////////////////////////////////////////////////////////////////
const linkHeader = document.querySelectorAll('.header_li');
const navMobClose = document.querySelector('.nav-mobile-close');
const navMobOpen = document.querySelector('.nav-mobile-open');
const mobHeader = document.querySelector('.header-nav-mobile');
const mobLinks = document.querySelector('.mobile-links');

////////////////////////////////////////////////////////////////////////Contact bubbles////////////////////////////////////////////////////////////////////////////////
const contactBubble = document.querySelector('.bubble-contact-me');
const bubbleContactText = document.querySelector('.bubble-contact-text');
const bubbleContactEmail = document.querySelector('.bubble-contact-email');

////////////////////////////////////////////////////////////////////////Text///////////////////////////////////////////////////////////////////////////////////////////
const textContainer = document.querySelector('.text_content');
const mainHeading = document.querySelector('.main-heading');
const subHeading = document.querySelector('.sub-heading');
const tagHeading = document.querySelector('.tag-heading');
const intHeading = document.querySelector('.int-heading');
const titleHeading = document.querySelector('.title-heading');
const paraTextContent = document.querySelector('.para-text-content');

////////////////////////////////////////////////////////////////////////Animations////////////////////////////////////////////////////////////////////////////////////
const hoverCan = document.querySelector('.container-animation');
const canZero = document.querySelector('.can-zero');
const canDiet = document.querySelector('.can-diet');
const canLemon = document.querySelector('.can-lemon');
const canSpray = document.querySelector('.can-spray');
const thoughtBubble = document.querySelector('.thought-bubble');
const themeSelectorLight = document.querySelector('.theme-lemonade');
const themeSelectorDark = document.querySelector('.theme-cola');

////////////////////////////////////////////////////////////////////////Variables//////////////////////////////////////////////////////////////////////////////////////
let themeDark = true;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Event Listeners//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
contactBubble.addEventListener('mouseover', showBubble);
contactBubble.addEventListener('mouseout', hideBubble);
textContainer.addEventListener('mouseover', textHighlight);
textContainer.addEventListener('mouseout', textStopHighlight);
hoverCan.addEventListener('mouseover', canHover);
hoverCan.addEventListener('mouseout', canRemoveHover);
hoverCan.addEventListener('click', dietGeoffBreak);
themeSelectorLight.addEventListener('click', applyThemeLight);
themeSelectorDark.addEventListener('click', applyThemeDark);
navMobClose.addEventListener('click', closeMobNav);
navMobOpen.addEventListener('click', openMobNav);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Functions////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function closeMobNav() {
	navMobOpen.classList.remove('mob-hidden');
	navMobClose.classList.add('mob-hidden');
	linkHeader.forEach((el) => {
		el.classList.add('mob-hidden');
	});

	themeSelectorDark.classList.add('mob-hidden');
	themeSelectorLight.classList.add('mob-hidden');
	mobLinks.classList.add('mob-hidden');
}

function openMobNav() {
	console.log('open me');
	navMobOpen.classList.add('mob-hidden');
	navMobClose.classList.remove('mob-hidden');
	linkHeader.forEach((el) => {
		el.classList.remove('mob-hidden');
	});
	themeSelectorDark.classList.remove('mob-hidden');
	themeSelectorLight.classList.remove('mob-hidden');
	mobLinks.classList.remove('mob-hidden');
	mobLinks.classList.remove('.mobile-links-reverse');
}

function applyThemeDark() {
	background.classList.add('bubbling_background');
	background.classList.remove('bubbling_background-light');
	themeSelectorDark.classList.add('page_theme-hidden');
	themeSelectorLight.classList.remove('page_theme-hidden');
	canLemon.classList.remove('can-infinite-animate');
	canLemon.classList.add('can-hidden');

	canZero.classList.remove('can-hidden');
	canZero.classList.add('can-infinite-animate');
	themeDark = true;
	linkHeader.forEach((el) => {
		el.classList.add('header_li-dark');
		el.classList.remove('header_li-light');
	});
	textContainer.classList.add('text_content-dark');
	textContainer.classList.remove('text_content-light');
	mainHeading.classList.add('main-heading-dark');
	mainHeading.classList.remove('main-heading-light');
	mobHeader.classList.remove('header-nav-mobile-light');
	mobHeader.classList.add('header-nav-mobile-dark');
	mobLinks.classList.add('mobile-links-dark');
	mobLinks.classList.remove('mobile-links-light');
	subHeading.classList.add('sub-heading-dark');
	subHeading.classList.remove('sub-heading-light');
}

function applyThemeLight() {
	background.classList.add('bubbling_background-light');
	background.classList.remove('bubbling_background');
	themeSelectorDark.classList.remove('page_theme-hidden');
	themeSelectorLight.classList.add('page_theme-hidden');
	canLemon.classList.add('can-infinite-animate');
	canLemon.classList.remove('can-hidden');

	canZero.classList.add('can-hidden');
	canZero.classList.remove('can-infinite-animate');
	themeDark = false;
	linkHeader.forEach((el) => {
		el.classList.add('header_li-light');
		el.classList.remove('header_li-dark');
	});

	textContainer.classList.remove('text_content-dark');
	textContainer.classList.add('text_content-light');
	mainHeading.classList.remove('main-heading-dark');
	mainHeading.classList.add('main-heading-light');
	mobHeader.classList.add('header-nav-mobile-light');
	mobHeader.classList.remove('header-nav-mobile-dark');
	mobLinks.classList.remove('mobile-links-dark');
	mobLinks.classList.add('mobile-links-light');
	subHeading.classList.remove('sub-heading-dark');
	subHeading.classList.add('sub-heading-light');
}

function dietGeoffBreak() {
	background.classList.add('bubbling_background');
	background.classList.remove('bubbling_background-light');
	subHeading.classList.add('sub-heading-dark');
	subHeading.classList.remove('sub-heading-light');
	mobHeader.classList.add('header-nav-mobile-dark');
	mobHeader.classList.remove('header-nav-mobile-light');
	mobLinks.classList.add('mobile-links-dark');
	mobLinks.classList.remove('mobile-links-light');

	mainHeading.classList.add('main-heading-dark');
	mainHeading.classList.add('highlight-text-dark');
	subHeading.classList.add('shadow-text-dark');
	textContainer.classList.add('text_content-dark');
	themeSelectorDark.classList.add('page_theme-hidden');
	themeSelectorLight.classList.add('page_theme-hidden');
	canZero.classList.add('can-hidden');
	canLemon.classList.add('can-hidden');
	thoughtBubble.classList.add('thought-bubble-hidden');
	canDiet.classList.remove('can-hidden');
	canSpray.classList.remove('can-hidden');
	textBackground.classList.remove('text-background-hidden');
	contactBubble.classList.add('thought-bubble-hidden');
	titleHeading.classList.add('text-hidden');
	tagHeading.classList.add('text-hidden');
	paraTextContent.classList.add('text-hidden');
	intHeading.classList.add('text-hidden');
	linkHeader.forEach((el) => {
		el.classList.add('header_li-dark');
		el.classList.remove('header_li-light');
	});

	setTimeout(() => {
		canSpray.classList.add('can-hidden');
	}, 2500);

	setTimeout(() => {
		mainHeading.classList.remove('highlight-text');
		subHeading.classList.remove('shadow-text');
		canZero.classList.remove('can-hidden');
		canDiet.classList.add('can-hidden');
		thoughtBubble.classList.remove('thought-bubble-hidden');
		textBackground.classList.add('text-background-hidden');
		contactBubble.classList.remove('thought-bubble-hidden');
		titleHeading.classList.remove('text-hidden');
		tagHeading.classList.remove('text-hidden');
		paraTextContent.classList.remove('text-hidden');
		intHeading.classList.remove('text-hidden');
		if (themeDark === true) {
			canZero.classList.remove('can-hidden');
			canLemon.classList.add('can-hidden');
		} else {
			canLemon.classList.remove('can-hidden');
			canZero.classList.add('can-hidden');
			background.classList.add('bubbling_background-light');
			subHeading.classList.add('sub-heading-light');
			mobHeader.classList.add('header-nav-mobile-light');
			mobLinks.classList.add('mobile-links-light');
			mainHeading.classList.remove('main-heading-dark');
		}
		mainHeading.classList.remove('highlight-text-dark');
		subHeading.classList.remove('shadow-text-dark');
		if (themeDark === false) {
			textContainer.classList.remove('text_content-dark');
			themeSelectorDark.classList.remove('page_theme-hidden');
			linkHeader.forEach((el) => {
				el.classList.add('header_li-light');
				el.classList.remove('header_li-dark');
			});
		} else {
			themeSelectorLight.classList.remove('page_theme-hidden');
		}
	}, 29000);
}

function canHover() {
	canZero.classList.add('can-hover');
	canLemon.classList.add('can-hover');
	thoughtBubble.classList.add('thought-bubble-hover');
}

function canRemoveHover() {
	canZero.classList.remove('can-hover');
	canLemon.classList.remove('can-hover');
	thoughtBubble.classList.remove('thought-bubble-hover');
}

function textHighlight() {
	if (themeDark === true) {
		mainHeading.classList.add('highlight-text-dark');
		subHeading.classList.add('shadow-text-dark');
	} else {
		mainHeading.classList.add('highlight-text-light');
		subHeading.classList.add('shadow-text-light');
	}
}

function textStopHighlight() {
	if (themeDark === true) {
		mainHeading.classList.remove('highlight-text-dark');
		subHeading.classList.remove('shadow-text-dark');
	} else {
		mainHeading.classList.remove('highlight-text-light');
		subHeading.classList.remove('shadow-text-light');
	}
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
