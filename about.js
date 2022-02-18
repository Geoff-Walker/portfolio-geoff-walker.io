//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Selectors///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Event Listeners/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
navHome.addEventListener('mouseover', navHoverHome);
navHome.addEventListener('mouseout', navHoverHomeRem);
navProj.addEventListener('mouseover', navHoverProject);
navProj.addEventListener('mouseout', navHoverProjectRem);
navContact.addEventListener('mouseover', navHoverContact);
navContact.addEventListener('mouseout', navHoverContactRem);
navImage.addEventListener('click', returnHome);
resumeLogo.addEventListener('click', openResume);
linkedInLogo.addEventListener('click', openLinkdIn);
gitHubLogo.addEventListener('click', openGithub);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nav Bar Functions///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

function openResume() {
	window.open('https://www.geoff-walker.io/Resume.pdf');
}

function openLinkdIn() {
	window.open('https://www.linkedin.com/in/geoff-walker-a3ab02227/');
}

function openGithub() {
	window.open('https://github.com/Geoff-Walker/Geoff-Walker');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Animated Functions//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Divs/////////////////////////////////////
firstDiv = document.getElementById('first-div');
secondDiv = document.getElementById('second-div');
thirdDiv = document.getElementById('third-div');
fourthDiv = document.getElementById('fourth-div');
fifthDiv = document.getElementById('fifth-div');
sixthDiv = document.getElementById('sixth-div');
seventhDiv = document.getElementById('seventh-div');
eighthDiv = document.getElementById('eighth-div');
ninthDiv = document.getElementById('ninth-div');
tenthDiv = document.getElementById('tenth-div');
eleventhDiv = document.getElementById('eleventh-div');
twelveDiv = document.getElementById('twelve-div');
thirteenDiv = document.getElementById('thirteen-div');
fourteenDiv = document.getElementById('fourteen-div');
fifteenDiv = document.getElementById('fifteen-div');
sixteenDiv = document.getElementById('sixteen-div');
seventeenDiv = document.getElementById('seventeen-div');
eighteenDiv = document.getElementById('eighteen-div');
nineteenDiv = document.getElementById('nineteen-div');
const animatedDivs = document.querySelectorAll('.animated-div');

////////////////////Images within the Divs/////////////////////////////////////

image1Div1 = document.querySelector('.first-div-img-1');
image2Div2 = document.querySelector('.second-div-img-2');
image3Div3 = document.querySelector('.third-div-img-3');
image4Div4 = document.querySelector('.fourth-div-img-4');
image5Div4 = document.querySelector('.fourth-div-img-5');
image6Div5 = document.querySelector('.fifth-div-img-6');
image7Div6 = document.querySelector('.sixth-div-img-7');
image8Div6 = document.querySelector('.sixth-div-img-8');
image9Div7 = document.querySelector('.seventh-div-img-9');
image10Div7 = document.querySelector('.seventh-div-img-10');
image11Div8 = document.querySelector('.eighth-div-img-11');
image12Div8 = document.querySelector('.eighth-div-img-12');
image13Div8 = document.querySelector('.eighth-div-img-13');
image14Div8 = document.querySelector('.eighth-div-img-14');
image15Div9 = document.querySelector('.ninth-div-img-15');
image16Div9 = document.querySelector('.ninth-div-img-16');
image17Div9 = document.querySelector('.ninth-div-img-17');
image18Div9 = document.querySelector('.ninth-div-img-18');
image19Div10 = document.querySelector('.tenth-div-img-19');
image20Div10 = document.querySelector('.tenth-div-img-20');
image21Div10 = document.querySelector('.tenth-div-img-21');
image22Div10 = document.querySelector('.tenth-div-img-22');
image23Div11 = document.querySelector('.eleventh-div-img-23');
image24Div11 = document.querySelector('.eleventh-div-img-24');
image25Div11 = document.querySelector('.eleventh-div-img-25');
image26Div11 = document.querySelector('.eleventh-div-img-26');
image27Div12 = document.querySelector('.twelve-div-img-27');
image28Div12 = document.querySelector('.twelve-div-img-28');
image29Div13 = document.querySelector('.thirteen-div-img-29');
image30Div13 = document.querySelector('.thirteen-div-img-30');
image31Div13 = document.querySelector('.thirteen-div-img-31');
image32Div14 = document.querySelector('.fourteen-div-img-32');
image33Div14 = document.querySelector('.fourteen-div-img-33');
image34Div14 = document.querySelector('.fourteen-div-img-34');
image35Div15 = document.querySelector('.fifteen-div-img-35');
image36Div15 = document.querySelector('.fifteen-div-img-36');
image37Div15 = document.querySelector('.fifteen-div-img-37');
image38Div15 = document.querySelector('.fifteen-div-img-38');
image39Div16 = document.querySelector('.sixteen-div-img-39');
image40Div16 = document.querySelector('.sixteen-div-img-40');
image41Div16 = document.querySelector('.sixteen-div-img-41');
image42Div16 = document.querySelector('.sixteen-div-img-42');
image43Div16 = document.querySelector('.sixteen-div-img-43');
image44Div17 = document.querySelector('.seventeen-div-img-44');
image45Div17 = document.querySelector('.seventeen-div-img-45');
image46Div18 = document.querySelector('.eighteen-div-img-46');
image47Div18 = document.querySelector('.eighteen-div-img-47');
image48Div18 = document.querySelector('.eighteen-div-img-48');
image49Div18 = document.querySelector('.eighteen-div-img-49');
image50Div18 = document.querySelector('.eighteen-div-img-50');
image51Div19 = document.querySelector('.nineteen-div-img-51');

const observer = new IntersectionObserver(
	(divs) => {
		divs.forEach((div) => {
			if (div.isIntersecting) {
				div.target.firstElementChild.classList.remove('opaque');
				imageAnimation(div.target);
			} else {
				div.target.firstElementChild.classList.add('opaque');
				hideImages(div.target);
			}
		});
	},
	{ threshold: 0.75 }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////To ensure the insection observer doesn't shut the doors on load observer started on scroll of project area///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function startObserver() {
	animatedDivs.forEach((div) => {
		observer.observe(div);
	});
}

startObserver();

function imageAnimation(div) {
	if (div === firstDiv) {
		image1Div1.classList.remove('hidden');
	}

	if (div === secondDiv) {
		setTimeout(() => {
			image2Div2.classList.remove('hidden');
		}, 1500);
	}

	if (div === thirdDiv) {
		image3Div3.classList.remove('hidden');
	}

	if (div === fourthDiv) {
		image4Div4.classList.remove('hidden');
		setTimeout(() => {
			image5Div4.classList.remove('hidden');
		}, 1500);
	}

	if (div === fifthDiv) {
		image6Div5.classList.remove('hidden');
	}

	if (div === sixthDiv) {
		image7Div6.classList.remove('hidden');
		setTimeout(() => {
			image8Div6.classList.remove('hidden');
		}, 1500);
	}

	if (div === seventhDiv) {
		image9Div7.classList.remove('hidden');
		setTimeout(() => {
			image10Div7.classList.remove('hidden');
		}, 1500);
	}

	if (div === eighthDiv) {
		image11Div8.classList.remove('hidden');
		image12Div8.classList.remove('hidden');
		setTimeout(() => {
			image13Div8.classList.remove('hidden');
		}, 1500);
		setTimeout(() => {
			image14Div8.classList.remove('hidden');
		}, 2000);
	}

	if (div === ninthDiv) {
		image15Div9.classList.remove('hidden');

		setTimeout(() => {
			image16Div9.classList.remove('hidden');
		}, 1500);
		setTimeout(() => {
			image18Div9.classList.remove('hidden');
		}, 2500);
	}

	if (div === tenthDiv) {
		image19Div10.classList.remove('hidden');
		setTimeout(() => {
			image20Div10.classList.remove('hidden');
		}, 1000);

		setTimeout(() => {
			image21Div10.classList.remove('hidden');
			image22Div10.classList.remove('hidden');
		}, 2500);
	}

	if (div === eleventhDiv) {
		image23Div11.classList.remove('hidden');

		setTimeout(() => {
			image24Div11.classList.remove('hidden');
		}, 500);

		setTimeout(() => {
			image25Div11.classList.remove('hidden');
		}, 1000);

		setTimeout(() => {
			image26Div11.classList.remove('hidden');
		}, 1500);
	}

	if (div === twelveDiv) {
		image27Div12.classList.remove('hidden');

		setTimeout(() => {
			image28Div12.classList.remove('hidden');
		}, 500);
	}

	if (div === thirteenDiv) {
		image29Div13.classList.remove('hidden');

		setTimeout(() => {
			image30Div13.classList.remove('hidden');
		}, 1000);
		setTimeout(() => {
			image31Div13.classList.remove('hidden');
		}, 2000);
	}

	if (div === fourteenDiv) {
		image32Div14.classList.remove('hidden');
		image33Div14.classList.remove('hidden');
		image34Div14.classList.remove('hidden');
	}

	if (div === fifteenDiv) {
		image36Div15.classList.remove('hidden');

		setTimeout(() => {
			image35Div15.classList.remove('hidden');
		}, 500);

		setTimeout(() => {
			image37Div15.classList.remove('hidden');
		}, 1500);

		setTimeout(() => {
			image38Div15.classList.remove('hidden');
		}, 2500);
	}

	if (div === sixteenDiv) {
		image39Div16.classList.remove('hidden');
		setTimeout(() => {
			image40Div16.classList.remove('hidden');
		}, 1200);

		setTimeout(() => {
			image41Div16.classList.remove('hidden');
		}, 2000);

		setTimeout(() => {
			image42Div16.classList.remove('hidden');
		}, 2500);

		setTimeout(() => {
			image43Div16.classList.remove('hidden');
		}, 2700);
	}

	if (div === seventeenDiv) {
		image45Div17.classList.remove('hidden');

		setTimeout(() => {
			image44Div17.classList.remove('hidden');
		}, 700);
	}

	if (div === eighteenDiv) {
		image48Div18.classList.remove('hidden');

		setTimeout(() => {
			image46Div18.classList.remove('hidden');
		}, 700);

		setTimeout(() => {
			image47Div18.classList.remove('hidden');
		}, 1800);
		setTimeout(() => {
			image49Div18.classList.remove('hidden');
		}, 2800);
		setTimeout(() => {
			image50Div18.classList.remove('hidden');
		}, 3500);
	}

	if (div === nineteenDiv) {
		image51Div19.classList.remove('hidden');
	}
}

function hideImages(div) {
	if (div === firstDiv) {
		image1Div1.classList.add('hidden');
	}

	if (div === secondDiv) {
		image2Div2.classList.add('hidden');
	}

	if (div === thirdDiv) {
		image3Div3.classList.add('hidden');
	}

	if (div === fourthDiv) {
		image4Div4.classList.add('hidden');
		image5Div4.classList.add('hidden');
	}

	if (div === fifthDiv) {
		image6Div5.classList.add('hidden');
	}

	if (div === sixthDiv) {
		image7Div6.classList.add('hidden');
		image8Div6.classList.add('hidden');
	}

	if (div === seventhDiv) {
		image9Div7.classList.add('hidden');
		image10Div7.classList.add('hidden');
	}

	if (div === eighthDiv) {
		image11Div8.classList.add('hidden');
		image12Div8.classList.add('hidden');
		image13Div8.classList.add('hidden');
		image14Div8.classList.add('hidden');
	}

	if (div === ninthDiv) {
		image15Div9.classList.add('hidden');
		image16Div9.classList.add('hidden');
		image18Div9.classList.add('hidden');
	}

	if (div === tenthDiv) {
		image19Div10.classList.add('hidden');
		image20Div10.classList.add('hidden');
		image21Div10.classList.add('hidden');
		image22Div10.classList.add('hidden');
	}

	if (div === eleventhDiv) {
		image23Div11.classList.add('hidden');
		image24Div11.classList.add('hidden');
		image25Div11.classList.add('hidden');
		image26Div11.classList.add('hidden');
	}

	if (div === twelveDiv) {
		image27Div12.classList.add('hidden');
		image28Div12.classList.add('hidden');
	}

	if (div === thirteenDiv) {
		image29Div13.classList.add('hidden');
		image30Div13.classList.add('hidden');
		image31Div13.classList.add('hidden');
	}

	if (div === fourteenDiv) {
		image32Div14.classList.add('hidden');
		image33Div14.classList.add('hidden');
		image34Div14.classList.add('hidden');
	}

	if (div === fifteenDiv) {
		image35Div15.classList.add('hidden');
		image36Div15.classList.add('hidden');
		image37Div15.classList.add('hidden');
		image38Div15.classList.add('hidden');
	}

	if (div === sixteenDiv) {
		image39Div16.classList.add('hidden');
		image40Div16.classList.add('hidden');
		image41Div16.classList.add('hidden');
		image42Div16.classList.add('hidden');
		image43Div16.classList.add('hidden');
	}

	if (div === seventeenDiv) {
		image44Div17.classList.add('hidden');
		image45Div17.classList.add('hidden');
	}

	if (div === eighteenDiv) {
		image46Div18.classList.add('hidden');
		image47Div18.classList.add('hidden');
		image48Div18.classList.add('hidden');
		image49Div18.classList.add('hidden');
		image50Div18.classList.add('hidden');
	}

	if (div === nineteenDiv) {
		image51Div19.classList.add('hidden');
	}
}
