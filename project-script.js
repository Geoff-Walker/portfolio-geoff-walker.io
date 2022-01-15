//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Selectors and Variables/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fadeMe = document.querySelectorAll('.fade-me');
showMenu = document.querySelector('.menu-link');
fillDetail = document.querySelectorAll('.project-detail');
showDetail = document.querySelector('.menu-detail');
doors = document.querySelectorAll('.door');
doorLeft = document.querySelector('.door-left');
doorRight = document.querySelector('.door-right');
projectdetail = document.querySelectorAll('.project-hide');
title = document.querySelector('.title');
selectors = document.querySelector('.selectors');
summary = document.querySelector('.summary');
summaryDetail = document.querySelector('.summary-detail');
clearSummary = document.querySelector('.clear-sum');
internalLinks = document.querySelectorAll('.btn-int');
externalLinks = document.querySelectorAll('.btn-ext');
btnFilter = document.querySelectorAll('.btn-filter');
projectImages = document.querySelector('.image');
btnFilterWeb = document.querySelector('.btn-filter-web');
btnFilterJavascript = document.querySelector('.btn-filter-javascript');
btnFilterApi = document.querySelector('.btn-filter-api');
filterWeb = document.querySelectorAll('.filter-website');
filterJavascript = document.querySelectorAll('.filter-javascript');
filterApi = document.querySelectorAll('.filter-api');
beams = document.querySelectorAll('.beam');
fallbackProjects = document.querySelectorAll('.project-fallback');
image = document.querySelectorAll('.image');
containerProjects = document.querySelector('.container-projects');
let javascriptFilter = true;
let webFilter = true;
let apiFilter = true;
const projects = document.querySelectorAll('.project');
let target = projects[0];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Toggle project image size //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

image.forEach((img) => {
	img.addEventListener('click', largeImage);
	img.addEventListener('mouseover', largeImage);
	img.addEventListener('mouseout', removeLargeImage);
});

function largeImage() {
	this.classList.toggle('image-large');

	fillDetail.forEach((project) => {
		if (this.classList.contains('image-large')) {
			project.classList.add('fill-me');
		} else {
			project.classList.remove('fill-me');
		}
	});

	fadeMe.forEach((text) => {
		if (this.classList.contains('image-large')) {
			text.classList.add('hide');
		} else {
			text.classList.remove('hide');
		}
	});
}

function removeLargeImage() {
	this.classList.remove('image-large');
	fadeMe.forEach((text) => {
		text.classList.remove('hide');
	});

	fillDetail.forEach((project) => project.classList.remove('fill-me'));
}

showMenu.addEventListener('click', menu);
showDetail.addEventListener('click', detail);

function menu() {
	selectors.classList.toggle('hide');
}

function detail() {
	summary.classList.toggle('hide');
	console.log('testing');
}

/////////////////////////////////////////////////////////////////////Emergency door open//////////////////////////////////////////////////////////////////////////////
doors.forEach((door) => {
	door.addEventListener('click', openDoors);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Flash Elevator buttons to draw users attention to the Side Nav////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

containerProjects.addEventListener('scroll', startElevator);
window.addEventListener('touchstart', startElevator);

function onLoad() {
	internalLinks.forEach((element) => {
		element.classList.add('btn-flash');
	});

	btnFilter.forEach((element) => {
		element.classList.add('btn-filter-flash');
	});

	setTimeout(() => {
		internalLinks.forEach((element) => {
			element.classList.remove('btn-flash');
		});

		btnFilter.forEach((element) => {
			element.classList.remove('btn-filter-flash');
		});
	}, 2000);
}

window.onLoad = onLoad();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Create observer to observe each project coming in the viewport////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				openDoors();
				target = entry.target;
				renderDetail(target);
			} else {
				closeDoors();
			}
		});
	},
	{ threshold: 0.95 }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////To ensure the insection observer doesn't shut the doors on load observer started on scroll of project area///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function startElevator() {
	projects.forEach((project) => {
		observer.observe(project);
	});
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Open and close the doors///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function openDoors() {
	doorLeft.classList.add('open-door-left');
	doorRight.classList.add('open-door-right');
	projectdetail.forEach((element) => {
		element.classList.remove('hidden');
		element.classList.add('shown');
	});
	externalLinks.forEach((element) => {
		element.classList.add('btn-flash');
	});

	setTimeout(() => {
		externalLinks.forEach((element) => {
			element.classList.remove('btn-flash');
		});
	}, 2000);
}

function closeDoors() {
	doorLeft.classList.remove('open-door-left');
	doorRight.classList.remove('open-door-right');
	doorLeft.classList.add('close-door-left');
	doorRight.classList.add('close-door-right');

	projectdetail.forEach((element) => {
		element.classList.add('hidden');
		element.classList.remove('shown');
	});
}

function emergencyOpenDoor() {}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Render the project title and the technologies list based upon the target of the observer/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderDetail(target) {
	title.innerHTML = '';
	title.innerHTML = `${target.dataset.title}`;

	clearSummary.innerHTML = '';
	let renTech = target.dataset.tech.split(', ');

	for (let i = 0; i < renTech.length; i++) {
		let li = document.createElement('li');
		li.innerHTML = `${renTech[i]}`;
		clearSummary.appendChild(li);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Link to the project website and Github based upon the target of the observer/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function website() {
	window.open(target.dataset.website);
}

function repo() {
	window.open(target.dataset.repo);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Set the filters based upon the buttons pressed, toggle its active class and trigger filter////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function filter(type) {
	if (type === 'web') {
		if (webFilter === true) {
			webFilter = false;
		} else if (webFilter === false) {
			webFilter = true;
		}

		btnFilterWeb.classList.toggle('btn-filter-active');
	}

	if (type === 'javascript') {
		if (javascriptFilter === true) {
			javascriptFilter = false;
		} else if (javascriptFilter === false) {
			javascriptFilter = true;
		}

		btnFilterJavascript.classList.toggle('btn-filter-active');
	}

	if (type === 'api') {
		if (apiFilter === true) {
			apiFilter = false;
		} else if (apiFilter === false) {
			apiFilter = true;
		}

		btnFilterApi.classList.toggle('btn-filter-active');
	}

	filterScreen();
	fallbackProject();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Filter projects and following beams if they dont have an active category///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function filterScreen() {
	let displayWeb = true;
	let displayJava = true;
	let displayApi = true;

	projects.forEach((project) => {
		if (project.classList.contains('filter-website')) {
			displayWeb = true;
			if (project.classList.contains('filter-website') && webFilter === false) {
				displayWeb = false;
			}
		} else {
			displayWeb = false;
		}

		if (project.classList.contains('filter-javascript')) {
			displayJava = true;
			if (project.classList.contains('filter-javascript') && javascriptFilter === false) {
				displayJava = false;
			}
		} else {
			displayJava = false;
		}

		if (project.classList.contains('filter-api')) {
			displayApi = true;
			if (project.classList.contains('filter-api') && apiFilter === false) {
				displayApi = false;
			}
		} else {
			displayApi = false;
		}

		if (displayWeb === false && displayJava === false && displayApi === false) {
			project.classList.add('hide');
		} else {
			project.classList.remove('hide');
		}
	});

	beams.forEach((beam) => {
		if (beam.classList.contains('filter-website')) {
			displayWeb = true;
			if (beam.classList.contains('filter-website') && webFilter === false) {
				displayWeb = false;
			}
		} else {
			displayWeb = false;
		}

		if (beam.classList.contains('filter-javascript')) {
			displayJava = true;
			if (beam.classList.contains('filter-javascript') && javascriptFilter === false) {
				displayJava = false;
			}
		} else {
			displayJava = false;
		}

		if (beam.classList.contains('filter-api')) {
			displayApi = true;
			if (beam.classList.contains('filter-api') && apiFilter === false) {
				displayApi = false;
			}
		} else {
			displayApi = false;
		}

		if (displayWeb === false && displayJava === false && displayApi === false) {
			beam.classList.add('hide');
		} else {
			beam.classList.remove('hide');
		}
	});
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////show fallback card if no filters selected////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fallbackProject() {
	if (javascriptFilter === false && webFilter === false && apiFilter === false) {
		fallbackProjects.forEach((project) => {
			project.classList.remove('hide');
			setTimeout(() => {
				openDoors();
			}, 3000);
		});
	} else {
		fallbackProjects.forEach((project) => {
			project.classList.add('hide');
		});
	}
}
