export {};
import { footerYear, currnetYear } from './customer-panel';
import '../utils/nav-elements';

const yourProfessionTitle = document.querySelector('#profession-name') as HTMLSpanElement;

const userNameNav = document.querySelector('.user-provider-name') as HTMLParagraphElement;
const userMobileNameNav = document.querySelector('.user-provider-mobile-name') as HTMLParagraphElement;

const userName = document.querySelector('.your-visits-visit-box__customers-name p') as HTMLParagraphElement;

const street = document.querySelector('#your-visits__street') as HTMLParagraphElement;
const house = document.querySelector('#your-visits__home-number') as HTMLParagraphElement;
const city = document.querySelector('#your-visits__city') as HTMLParagraphElement;


const meetingDay = document.querySelector('#your-visits__date-day') as HTMLElement;
const meetingHour = document.querySelector('#your-visits__date-hour') as HTMLSpanElement;

const heroCompanyImg = document.querySelector('.hero-img') as HTMLParagraphElement;

if (footerYear) {
	footerYear.textContent = currnetYear.toString();
}
if (yourProfessionTitle) {
	yourProfessionTitle.textContent = localStorage.getItem('selectedOptionText');
}

if (userNameNav) {
	userNameNav.textContent = localStorage.getItem('providerName');
}

if (userMobileNameNav) {
	userMobileNameNav.textContent = localStorage.getItem('providerName');
}


localStorage.getItem('selectedOption');
localStorage.getItem('companyStreet');
localStorage.getItem('companyHome');
localStorage.getItem('companyCity');
localStorage.getItem('companyCode');


if (userName) {
	userName.textContent = 'Imię klienta: ' + localStorage.getItem('customerName');
}
if (street) {
	street.textContent = 'Ulica: ' + localStorage.getItem('adressStreet');
}
if (house) {
	house.textContent = 'Nr.Domu: ' + localStorage.getItem('adressHouse');
}
if (city) {
	city.textContent = 'Miasto:' + localStorage.getItem('adressCity');
}
if(meetingDay){
	meetingDay.textContent =  localStorage.getItem('serviceDay');
}
if (meetingHour) {
	meetingHour.textContent =  localStorage.getItem('serviceHour');
}

const combIcon = document.querySelector('.comb') as HTMLElement;
const clipperIcon = document.querySelector('.clipper') as HTMLElement;
const scissorsIcon = document.querySelector('.scissors-company') as HTMLElement;
const barberIcons = [combIcon, clipperIcon, scissorsIcon];

const scredriverIcon = document.querySelector('.screwdriver') as HTMLElement;
const gearIcon = document.querySelector('.gear') as HTMLElement;
const gearTwoIcon = document.querySelector('.gear-two') as HTMLElement;
const wrenchIcon = document.querySelector('.wrench-company') as HTMLElement;
const mechanicIcons = [scredriverIcon, gearIcon, gearTwoIcon, wrenchIcon];

const bookIcon = document.querySelector('.book') as HTMLElement;
const graduationIcon = document.querySelector('.graduation') as HTMLElement;
const pencilIcon = document.querySelector('.pencil-company') as HTMLElement;
const tutorIcons = [bookIcon, graduationIcon, pencilIcon];

if (localStorage.getItem('selectedOption') === 'TUTOR') {
	if (heroCompanyImg) {
		heroCompanyImg.classList.add('tutor-img');
	}
	tutorIcons.forEach(icon => {
		if (icon) {
			icon.style.display = 'block';
		}
	});
}
if (localStorage.getItem('selectedOption') === 'MECHANIC') {
	if (heroCompanyImg) {
		heroCompanyImg.classList.add('mechanic-img');
	}
	mechanicIcons.forEach(icon => {
		if (icon) {
			icon.style.display = 'block';
		}
	});
}
if (localStorage.getItem('selectedOption') === 'BARBER') {
	if (heroCompanyImg) {
		heroCompanyImg.classList.add('barber-img');
	}
	barberIcons.forEach(icon => {
		if (icon) {
			icon.style.display = 'block';
		}
	});
}
