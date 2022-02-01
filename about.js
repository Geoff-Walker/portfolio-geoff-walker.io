navHome = document.querySelector('.index-rotate');
navProj = document.querySelector('.project-rotate');
navContact = document.querySelector('.contact-rotate');
navHomeImage = document.querySelector('.nav-home-image-reveal');
navProjectImage = document.querySelector('.nav-project-image-reveal');
navContactImage = document.querySelector('.nav-contact-image-reveal');
navHomeClick = document.querySelector('.nav-home-click-reveal');
navProjectClick = document.querySelector('.nav-project-click-reveal');
navContactClick = document.querySelector('.nav-contact-click-reveal');
navImage = document.querySelector('.nav-image');
resumeLogo = document.querySelector('.logo-9');
linkedInLogo = document.querySelector('.logo-10');
gitHubLogo = document.querySelector('.logo-11');

navHome.addEventListener('mouseover', navHoverHome);
navHome.addEventListener('mouseout', navHoverHomeRem);
navProj.addEventListener('mouseover', navHoverProject);
navProj.addEventListener('mouseout', navHoverProjectRem);
navContact.addEventListener('mouseover', navHoverContact);
navContact.addEventListener('mouseout', navHoverContactRem);
navImage.addEventListener('click', returnHome);

function navHoverHome() {
	navHomeImage.classList.remove('nav-hidden');
	navHomeImage.classList.add('highlight-yellow');

	navHomeImage.addEventListener('click', goHome);
}
function navHoverHomeRem() {
	navHomeImage.classList.add('nav-hidden');
	navHomeImage.classList.remove('highlight-yellow');
	navHomeImage.removeEventListener('click', goHome);
}

function navHoverProject() {
	navProjectImage.classList.remove('nav-hidden');
	navProjectImage.classList.add('highlight-yellow');
	navProjectImage.addEventListener('click', goProjects);
}
function navHoverProjectRem() {
	navProjectImage.classList.add('nav-hidden');
	navProjectImage.classList.remove('highlight-yellow');
	navProjectImage.removeEventListener('click', goProjects);
}

function navHoverContact() {
	navContactImage.classList.remove('nav-hidden');
	navContactImage.classList.add('highlight-yellow');
	navContactImage.addEventListener('click', goContact);
}

function navHoverContactRem() {
	navContactImage.classList.add('nav-hidden');
	navContactImage.classList.remove('highlight-yellow');
	navContactImage.removeEventListener('click', goContact);
}

function goHome() {
	navHomeClick.classList.remove('nav-hidden');
	navHomeClick.classList.add('highlight-blue');
	setTimeout(() => {
		window.location.href = 'index.html';
	}, 1000);
}

function goProjects() {
	navProjectClick.classList.remove('nav-hidden');
	navProjectClick.classList.add('highlight-blue');
	setTimeout(() => {
		window.location.href = 'project.html';
	}, 1000);
}

function goContact() {
	navContactClick.classList.remove('nav-hidden');
	navContactClick.classList.add('highlight-blue');
	setTimeout(() => {
		window.location.href = 'contact.html';
	}, 1000);
}

function returnHome() {
	window.location.href = 'index.html';
}

resumeLogo.addEventListener('click', openResume);
linkedInLogo.addEventListener('click', openLinkdIn);
gitHubLogo.addEventListener('click', openGithub);

function openResume() {
	window.open('https://www.geoff-walker.io/Resume.pdf');
}

function openLinkdIn() {
	window.open('https://www.linkedin.com/in/geoff-walker-a3ab02227/');
}

function openGithub() {
	window.open('https://github.com/Geoff-Walker/Geoff-Walker');
}
