hourHand = document.querySelector('.hand-hour');
minuteHand = document.querySelector('.hand-minute');
secondHand = document.querySelector('.hand-second');
coffeeCup = document.querySelector('.coffee-cup-container');
folderFront = document.querySelector('.folder-front');
folder = document.querySelector('.folder');
tab = document.querySelector('.tab');
folderText = document.querySelector('.folder-text-hide');
contactForm = document.querySelector('#contact-form');
right = document.querySelector('.right');
left = document.querySelector('.left');
bottom = document.querySelector('.bottom');
submit = document.querySelector('#submit');
tabText = document.querySelector('#tab');
linksHome = document.querySelector('.links-home');
textLinkHome = document.querySelector('.link-home');
linksProjects = document.querySelector('.links-projects');
textLinkProjects = document.querySelector('.link-projects');
linksAbout = document.querySelector('.links-about');
textLinkAbout = document.querySelector('.link-about');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Clock Workings////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(setClock, 1000);

function setClock() {
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
}

function setRotation(hand, rotationRatio) {
	hand.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Folder Animation//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

folderFront.addEventListener('click', folderMotion);
folderFront.addEventListener('mouseover', folderMotion);
folderFront.addEventListener('ontouch', folderMotion);
submit.addEventListener('click', folderMotion);

function folderMotion() {
	if (!folder.classList.contains('folder-up')) {
		folderFront.classList.add('folder-front-up');
		folder.classList.add('folder-up');
		tab.classList.add('tab-up');
		folderFront.removeEventListener('mouseover', folderMotion);
		folderFront.removeEventListener('ontouch', folderMotion);
		folderFront.removeEventListener('click', folderMotion);
		left.addEventListener('click', folderMotion);
		bottom.addEventListener('click', folderMotion);

		setTimeout((e) => {
			contactForm.classList.remove('hidden');
			tabText.innerText = 'X - Close Form';
			tabText.addEventListener('click', folderMotion);
			folderText.classList.add('hidden');
			folderFront.classList.add('folder-front-rotate');
			folderFront.classList.remove('folder-front-rotate-return');
		}, 500);

		setTimeout((e) => {
			folderFront.classList.add('hidden');
		}, 1500);
	} else {
		folderFront.classList.remove('hidden');
		folderFront.classList.remove('folder-front-rotate');
		folderFront.classList.add('folder-front-rotate-return');
		tabText.innerText = 'Contact Form';

		left.removeEventListener('click', folderMotion);
		bottom.removeEventListener('click', folderMotion);

		setTimeout((e) => {
			folderText.classList.remove('hidden');
		}, 700);

		setTimeout((e) => {
			contactForm.classList.add('hidden');
		}, 1000);

		setTimeout((e) => {
			folderFront.classList.remove('folder-front-up');
			folderFront.classList.remove('folder-front-rotate-return');
			folder.classList.remove('folder-up');
			tab.classList.remove('tab-up');
			folderFront.addEventListener('click', folderMotion);
			folderFront.addEventListener('mouseover', folderMotion);
			folderFront.addEventListener('ontouch', folderMotion);
		}, 1500);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Folder Animation//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

linksHome.addEventListener('mouseover', homeLink);
linksHome.addEventListener('mouseout', homeLink);
linksProjects.addEventListener('mouseover', projectsLink);
linksProjects.addEventListener('mouseout', projectsLink);
linksAbout.addEventListener('mouseover', aboutLink);
linksAbout.addEventListener('mouseout', aboutLink);

function homeLink() {
	linksHome.classList.toggle('links-active');
	textLinkHome.classList.toggle('link-home-active');
}

function projectsLink() {
	linksProjects.classList.toggle('links-active');
	textLinkProjects.classList.toggle('link-projects-active');
}

function aboutLink() {
	linksAbout.classList.toggle('links-active');
	textLinkAbout.classList.toggle('link-about-active');
}
