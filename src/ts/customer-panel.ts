export {};

import { toggleError } from './toggle-error';

const companyLocalCheckbox = document.querySelector('#local') as HTMLInputElement;
const companyAdress = document.querySelector('.company-adress') as HTMLDivElement;

const companyStreet = document.querySelector('#company-street') as HTMLParagraphElement;
const companyHomeNumber = document.querySelector('#company-home-number') as HTMLParagraphElement;
const companyCity = document.querySelector('#company-city') as HTMLParagraphElement;
const companyCode = document.querySelector('#company-code') as HTMLParagraphElement;

const searchProvidersBtn = document.querySelector('#search-providers') as HTMLButtonElement;

export let date = new Date();
export const allTd: NodeListOf<HTMLTableDataCellElement> = document.querySelectorAll('tbody td');

const customerHomeCheckbox = document.querySelector('#client-home') as HTMLInputElement;
const clientAdressBox = document.querySelector('.client-adress') as HTMLDivElement;

export const footerYear = document.querySelector('.footer__current-year') as HTMLSpanElement;
export const currnetYear = new Date().getFullYear();

if (footerYear && currnetYear) {
	footerYear.textContent = currnetYear.toString();
}

const calendarCheckboxCheck = () => {
	if (customerHomeCheckbox.checked) {
		clientAdressBox!.style.display = 'flex';
		companyAdress.style.display = 'none';
	} else if (companyLocalCheckbox.checked) {
		companyAdress.style.display = 'block';
		clientAdressBox!.style.display = 'none';
	}
};

const checkboxesAdressArr = [customerHomeCheckbox, companyLocalCheckbox];

function handleCheckboxClick(this: HTMLInputElement) {
	checkboxesAdressArr.forEach(checkbox => {
		if (checkbox !== this) {
			checkbox.checked = false;
		} else {
			checkbox.checked = true;
		}
	});
}

const servicesSelect = document.querySelector('#select-services') as HTMLSelectElement;
const servicesCitySelect = document.querySelector('#select-city') as HTMLSelectElement;

const serviceProviderSmallerBox = document.querySelector(
	'.available-service-providers-container__first-box'
) as HTMLHeadingElement;
const serviceProvider = document.querySelector('.available-service-providers-container__title') as HTMLHeadingElement;
const availableServiceProviders = document.querySelector('.available-service-providers') as HTMLElement;
const listOfProvidersBox = document.querySelector('.available-service-providers-container__list') as HTMLElement;
const confirmProviderBtn = document.querySelector('#confirm-provider') as HTMLButtonElement;

const pickProfessionBox = document.querySelector('.pick-profession-box') as HTMLDivElement;
const headerBtnBox = document.querySelector('.header__btn') as HTMLDivElement;
const btnLink = document.querySelector('#search-btn-link') as HTMLElement;

const changeHeaderStructure = () => {
	if (window.innerWidth < 480) {
		btnLink.append(searchProvidersBtn);
		pickProfessionBox.append(btnLink);
	} else {
		headerBtnBox.append(searchProvidersBtn);
	}
};

window.addEventListener('resize', changeHeaderStructure);
window.addEventListener('load', changeHeaderStructure);

const calendarServicesProviderObjectArr = [{ id: 'name-service', name: 'name', city: 'city' }];

let serviceProviderCheckbox: HTMLInputElement;
let allInputs: NodeListOf<HTMLInputElement>;

const createServiceProviderElement = (name: string, id: string) => {
	const serviceProviderName = document.createElement('div');
	serviceProviderName.className = 'service-provider';
	const serviceProviderLabel = document.createElement('label');
	serviceProviderLabel.textContent = name;
	serviceProviderLabel.setAttribute('for', 'person');
	serviceProviderCheckbox = document.createElement('input');
	serviceProviderCheckbox.type = 'checkbox';
	serviceProviderCheckbox.id = `${id}`;
	serviceProviderCheckbox.className = 'person-checkbox';
	serviceProviderName.append(serviceProviderLabel, serviceProviderCheckbox);
	listOfProvidersBox.append(serviceProviderName);
	availableServiceProviders.append(listOfProvidersBox);
	serviceProviderSmallerBox.append(availableServiceProviders, confirmProviderBtn);
	serviceProviderCheckbox.addEventListener('change', handleCheckboxChange);

	allInputs = listOfProvidersBox.querySelectorAll('input');

	confirmProviderBtn.addEventListener('click', () => {
		const section = document.querySelector('#service-location');

		if (allInputs) {
			allInputs.forEach(input => {
				if (input.checked) {
					if (section) {
						section.scrollIntoView({ behavior: 'smooth' });
					}
				}
			});
			if (!Array.from(allInputs).some(input => input.checked)) {
				alert('Wybierz jedną z dostepnych osób');
			}
		}
	});
};

const updateServiceProviders = () => {
	const selectedProfession = servicesSelect.value;
	const selectedCity = servicesCitySelect.value;

	const section = document.querySelector('#pick-person-and-location-section');

	if (servicesSelect.selectedIndex > 0 && servicesCitySelect.selectedIndex > 0) {
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	} else {
		alert('Wybierz usługę oraz miasto');
	}

	if (selectedProfession === 'TUTOR') {
		serviceProvider.textContent = 'Dostępni korepetytorzy:';
		calendarServicesProviderObjectArr.forEach(provider => {
			const tutorService = provider.id.includes('tutor');
			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && tutorService) {
				createServiceProviderElement(provider.name, provider.id);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && tutorService) {
				createServiceProviderElement(provider.name, provider.id);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && tutorService) {
				createServiceProviderElement(provider.name, provider.id);
			}
		});
	}

	if (selectedProfession === 'BARBER') {
		serviceProvider.textContent = 'Dostepni fryzjerzy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const barberService = provider.id.includes('barber');

			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && barberService) {
				createServiceProviderElement(provider.name, provider.id);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && barberService) {
				createServiceProviderElement(provider.name, provider.id);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && barberService) {
				createServiceProviderElement(provider.name, provider.id);
			}
		});
	}

	if (selectedProfession === 'MECHANIC') {
		serviceProvider.textContent = 'Dostępni mechnicy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const mechanicService = provider.id.includes('mechanic');

			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && mechanicService) {
				createServiceProviderElement(provider.name, provider.id);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && mechanicService) {
				createServiceProviderElement(provider.name, provider.id);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && mechanicService) {
				createServiceProviderElement(provider.name, provider.id);
			}
		});
	}

	if (serviceProviderCheckbox) {
		serviceProviderCheckbox.addEventListener('change', handleCheckboxChange);
	}
};

const calendarSendBtn = document.querySelector('#send') as HTMLButtonElement;

if (calendarSendBtn !== null) {
	calendarSendBtn.addEventListener('click', () => {
		const hoursBoxInfo = document.querySelector('.hours-container__info-span') as HTMLSpanElement;
		if (hoursBoxInfo instanceof HTMLSpanElement && hoursBoxInfo.textContent !== null) {
			localStorage.setItem('serviceDay', hoursBoxInfo.textContent);
		}
	});
}

let checkboxes;
checkboxes = listOfProvidersBox.querySelectorAll('.person-checkbox');
for (let i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('change', handleCheckboxChange);
}

let lastCheckedCheckbox: HTMLInputElement | null = null;

function handleCheckboxChange(this: HTMLInputElement) {
	checkboxes = listOfProvidersBox.querySelectorAll('.person-checkbox');
	const isChecked = this.checked;

	if (isChecked) {
		if (lastCheckedCheckbox && lastCheckedCheckbox !== this) {
			lastCheckedCheckbox.checked = false;
		}
		lastCheckedCheckbox = this;
	} else {
		lastCheckedCheckbox = null;
	}
}

const locationCheckboxArr = [customerHomeCheckbox, companyLocalCheckbox];
function checkOneLocationCheckbox(event: Event) {
	const targetCheckbox = event.target as HTMLInputElement;
	if (targetCheckbox.checked) {
		locationCheckboxArr.forEach(checkbox => {
			if (checkbox !== targetCheckbox) {
				checkbox.checked = false;
			}
		});
	}
}

const clientStreet = document.querySelector('#client-street') as HTMLInputElement;
const clientHouse = document.querySelector('#client-house') as HTMLInputElement;
const clientCity = document.querySelector('#client-city') as HTMLInputElement;
const confirmAdressBtn = document.querySelector('#confirm-adress') as HTMLButtonElement;

const checkClientAdressValidation = () => {
	if (clientStreet.value === '') {
		toggleError(clientStreet, true, 'Podaj ulicę');
	} 	if (clientHouse.value === '') {
		toggleError(clientHouse, true, 'Podaj numer domu');
	} 	if (clientCity.value === '') {
		toggleError(clientCity, true, 'Podaj nazwę miasta');
	}

	else if (clientStreet.value !== '') {
		toggleError(clientStreet, false);
	} 	 if (clientHouse.value !== '') {
		toggleError(clientHouse, false);
	}  	if (clientCity.value !== '') {
		toggleError(clientCity, false);
	}

	if(!clientStreet.classList.contains("red-input") || !clientHouse.classList.contains("red-input") || !clientCity.classList.contains("red-input") ){
	const section = document.querySelector('#calendar-section');
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};
}

export const monthArr = [
	{ pl: 'Styczeń', en: 'January' },
	{ pl: 'Luty', en: 'February' },
	{ pl: 'Marzec', en: 'March' },
	{ pl: 'Kwiecień', en: 'April' },
	{ pl: 'Maj', en: 'May' },
	{ pl: 'Czerwiec', en: 'June' },
	{ pl: 'Lipiec', en: 'July' },
	{ pl: 'Sierpień', en: 'August' },
	{ pl: 'Wrzesień', en: 'Septemper' },
	{ pl: 'Październik', en: 'October' },
	{ pl: 'Listopad', en: 'November' },
	{ pl: 'Grudzień', en: 'December' },
];

document.addEventListener('DOMContentLoaded', () => {
	const userName = document.querySelector('.user-name') as HTMLParagraphElement;
	if (userName) {
		userName.textContent = localStorage.getItem('name');
	}
	localStorage.getItem('name');
	localStorage.getItem('selectedOption');
	localStorage.getItem('companyStreet');
	localStorage.getItem('companyHome');
	localStorage.getItem('companyCity');
	localStorage.getItem('companyCode');

	calendarServicesProviderObjectArr.forEach(obj => {
		const name = localStorage.getItem('name');
		const city = localStorage.getItem('companyCity');
		if (name !== null && city !== null) {
			obj.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
			obj.id = name.toLowerCase() + '-' + localStorage.getItem('selectedOption')?.toLowerCase();
			obj.city = city;
		}
	});

	if (companyStreet !== null) {
		companyStreet.textContent = localStorage.getItem('companyStreet');
	}
	if (companyHomeNumber !== null) {
		companyHomeNumber.textContent = localStorage.getItem('companyHome');
	}
	if (companyCity) {
		companyCity.textContent = localStorage.getItem('companyCity');
	}
	if (companyCode) {
		companyCode.textContent = localStorage.getItem('companyCode');
	}
	if (customerHomeCheckbox !== null) {
		customerHomeCheckbox.addEventListener('click', checkOneLocationCheckbox);
	}
	if (companyLocalCheckbox !== null) {
		companyLocalCheckbox.addEventListener('click', checkOneLocationCheckbox);
	}

	if (checkboxesAdressArr !== null && customerHomeCheckbox !== null && companyLocalCheckbox! == null) {
		checkboxesAdressArr.forEach(checkbox => {
			checkbox.addEventListener('click', function () {
				handleCheckboxClick.call(this);
			});
		});
	}

	if (servicesSelect !== null && servicesCitySelect !== null) {
		searchProvidersBtn.addEventListener('click', updateServiceProviders);
		customerHomeCheckbox.addEventListener('change', calendarCheckboxCheck);
		companyLocalCheckbox.addEventListener('change', calendarCheckboxCheck);
		confirmAdressBtn.addEventListener('click', checkClientAdressValidation);

	}
});
