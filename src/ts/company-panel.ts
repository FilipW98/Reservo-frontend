
export{}
// import {prevMonth,nextMonth} from "./customer-panel";


const yourProfessionTitle = document.querySelector('#profession-name') as HTMLSpanElement;
const userNameNav = document.querySelector('.user-name') as HTMLParagraphElement;
// const userName = document.querySelector('.customers-name') as HTMLSpanElement;
const userName = document.querySelector('.visit__customers-name p') as HTMLParagraphElement;
const street = document.querySelector('#visit__adress-street') as HTMLParagraphElement;
const house = document.querySelector('#visit__adress-home-number') as HTMLParagraphElement;
const city = document.querySelector('#visit__adress-city') as HTMLParagraphElement;
const code = document.querySelector('#visit__adress-code') as HTMLParagraphElement;


if (yourProfessionTitle) {
	yourProfessionTitle.textContent = localStorage.getItem('selectedOptionText');
}

if (userNameNav) {
	userNameNav.textContent = localStorage.getItem('name');

}

   localStorage.getItem('serviceDay')
   localStorage.getItem("selectedOption");
   localStorage.getItem('companyStreet');
   localStorage.getItem("companyHome");
   localStorage.getItem("companyCity");
   localStorage.getItem("companyCode");

if (userName) {
	userName.textContent =  "Imię klienta: " + localStorage.getItem('name');
}
if(street){
	street.textContent =   localStorage.getItem('companyStreet');
}
if(house){
	house.textContent =   localStorage.getItem('companyHome');
}
if(city){
	city.textContent =   localStorage.getItem('companyCity');
}
if(code){
	code.textContent =   localStorage.getItem('companyCode');
}
   






document.querySelector('#prev')?.addEventListener('click',() => {
	const td = document.querySelector('td');
	if (td) {
	//   prevMonth(td);
	}
} );

document.querySelector('#next')?.addEventListener('click',() => {
	const td = document.querySelector('td');
	if (td) {
	//   nextMonth(td);
	}
} );

document.addEventListener('DOMContentLoaded', () => {
	// const td = document.querySelectorAll('td')
	// prevMonth(td[0])
	// nextMonth(td[0])

})
