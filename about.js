navHome = document.querySelector('.index-rotate');
navProj = document.querySelector('.project-rotate');
navContact = document.querySelector('.contact-rotate');
navHomeImage = document.querySelector('.nav-home-image-reveal');
navProjectImage = document.querySelector('.nav-project-image-reveal');
navContactImage = document.querySelector('.nav-contact-image-reveal');
navImage = document.querySelector('.nav-image');

navHome.addEventListener('mouseover', navHoverHome);
navHome.addEventListener('mouseout', navHoverHomeRem);
navProj.addEventListener('mouseover', navHoverProject);
navProj.addEventListener('mouseout', navHoverProjectRem);
navContact.addEventListener('mouseover', navHoverContact);
navContact.addEventListener('mouseout', navHoverContactRem);
navImage.addEventListener('click', goHome);

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
	window.location.href = 'index.html';
}

function goProjects() {
	window.location.href = 'project.html';
}

function goContact() {
	window.location.href = 'contact.html';
}
