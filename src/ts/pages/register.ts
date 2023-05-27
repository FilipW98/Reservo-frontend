export {};

import {
	nameInput,
	providerName,
	surnameInput,
	numberInput,
	companyEmail,
	emailCustomerInput,
	passwordInput,
	repeatInput,
	companyInput,
	select,
	citySelect,
	termsInput,
	termsError,
	termsBox,
	inputsArr,
	surnameLabel,
} from '../utils/constants';
import { inputsValidation } from '../validation/inputsValidation';
import { clearAllErrors } from '../validation/clear-all-errors';
import { dataInputsCreator, companyAdress } from '../utils/new-elements';
import { toggleError, removeError } from '../validation/toggle-error';

export const customerInput = document.querySelector('#user') as HTMLInputElement;
export const checkCompanyInput = document.querySelector('#company') as HTMLInputElement;
export const registerBtn = document.querySelector('#register') as HTMLButtonElement;
termsError.classList.add('terms-error');

const createRegisterSelect = () => {
	const services = [
		{ value: 'default', label: 'Wybierz usługę', id: 'default' },
		{ value: 'TUTOR', label: 'Korepetycje', id: 'tutor' },
		{ value: 'BARBER', label: 'Fryzjer', id: 'barber' },
		{ value: 'MECHANIC', label: 'Mechanik', id: 'mechanic' },
	];
	select.id = 'services';
	select.name = 'services';
	select.className = 'input';

	const selectElement = select;

	const options: HTMLOptionElement[] = [];
	services.forEach(service => {
		const option = document.createElement('option');
		option.value = service.value;
		option.innerText = service.label;
		option.id = service.id;
		select.appendChild(option);
		if (option.value === 'default') {
			option.disabled = true;
		}
		options.push(option);
	});
	return [options, selectElement];
};

export const inputsEvents = (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input instanceof HTMLSelectElement) {
		input.classList.remove('red-input');
	} else if (!/^\d{2}-\d{3}$/.test(input.value)) {
		removeError(input);
		input.value = input.value.replace(/[^\d-]/g, '');
	} else {
		removeError(input);
		input.value = input.value.replace(/[^\d\W]/g, '');
	}
};

export const basicInfo = document.querySelector('.basic-info') as HTMLElement;
export const basicInfoNames = document.querySelector('.basic-info-names') as HTMLElement;

export const basicInfoCompany = document.createElement('div');
basicInfoCompany.className = 'basic-info-company';
export const basicInfoData = document.createElement('div');
basicInfoData.className = 'basic-info-data';
export const basicInfoData2 = document.createElement('div');
basicInfoData2.className = 'basic-info-data';
export const basicInfoData3 = document.createElement('div');
basicInfoData3.className = 'basic-info-data';
export const surnameInputData = document.querySelector('.surname-data') as HTMLDivElement;
surnameInputData.className = 'basic-info-data';

const basicInfoContact = document.querySelector('.basic-info-contact') as HTMLElement;
const emailCustomerData = document.querySelector('.email-customer-data') as HTMLElement;
const nameCustomerData = document.querySelector('.name-customer-data') as HTMLElement;

const providerNameLabel = document.createElement('label') as HTMLLabelElement;
providerNameLabel.htmlFor = 'provider-name';
providerNameLabel.innerText = 'Imię';

export const companyNamelabel = document.createElement('label');
companyNamelabel.htmlFor = 'company-name';
companyNamelabel.innerText = 'Nazwa firmy';
companyInput.className = 'input';
companyInput.id = 'company-name';
companyInput.name = 'company-name';
companyInput.type = 'text';

const servicesLabel = document.createElement('label');
servicesLabel.htmlFor = 'services';
servicesLabel.innerText = 'Świadczone usługi';

const companyEmailLabel = document.createElement('label');
companyEmailLabel.textContent = 'E-mail';
const emailCompanyData = document.createElement('div');
emailCompanyData.classList.add('basic-info-data');
emailCompanyData.classList.add('email-company-data');

let checkCompanyInputChecked = false;
const addInputs = () => {
	if (checkCompanyInput.checked && checkCompanyInputChecked === false) {
		checkCompanyInputChecked = true;
		emailCustomerInput.remove();
		emailCustomerData.remove();
		nameCustomerData.remove();
		companyEmail.id = 'email-company';
		companyEmail.type = 'text';
		companyEmail.classList.add('input');
		basicInfoData3.append(providerNameLabel, providerName);
		surnameInputData.append(surnameInput);
		basicInfoNames.append(basicInfoData3, surnameInputData);
		emailCompanyData.append(companyEmailLabel, companyEmail);
		basicInfoContact.append(emailCompanyData);
		basicInfoData.append(companyNamelabel, companyInput);
		basicInfoData2.append(servicesLabel, select);
		basicInfoCompany.append(basicInfoData, basicInfoData2);
		basicInfo.append(basicInfoNames, basicInfoContact, basicInfoCompany, companyAdress);
		clearAllErrors(termsBox, termsError);
	} else if (customerInput.checked) {
		checkCompanyInputChecked = false;
		companyEmail.remove();
		emailCompanyData.remove();
		basicInfoData3.remove();
		surnameInputData.append(surnameLabel, surnameInput);
		basicInfoNames.append(nameCustomerData, surnameInputData);
		emailCustomerData.append(emailCustomerInput);
		basicInfoContact.append(emailCustomerData);
		basicInfo.append(basicInfoContact);
		basicInfoCompany.remove();
		companyAdress.remove();
		clearAllErrors(termsBox, termsError);
	}
};

export type cityInputValue = string;

const handleEvent = (e: Event) => {
	const target = e.target as HTMLElement;
	if (e.type === 'input') {
		if (
			target.matches(
				'#name, #provider-name, #surname, #number, #email, #email-company, #company-name, #password, #repeat, #phone, #citySelect,#code,#home,#street'
			)
		) {
			if (target instanceof HTMLInputElement) {
				removeError(target);
			}
		}
		if (target.matches('#citySelect')) {
			inputsEvents(e);
		}
		if (target.matches('#services')){
			inputsEvents(e);
		}
	} else if (e.type === 'change') {
		if (target.matches('#company, #user')) {
			addInputs();
		} else if (target.matches('#terms')) {
			if (termsBox.contains(termsError)) {
				termsBox.removeChild(termsError);
			}
		}
	} else if (e.type === 'keypress') {
		if (target.matches('#phone')) {
			const keyEvent = e as KeyboardEvent;
			if (isNaN(parseInt(keyEvent.key))) {
				e.preventDefault();
			}
		}
	}
};

const inputs = dataInputsCreator(registerBtn!, toggleError, inputsEvents, checkCompanyInput);
const streetInput = inputs.inputs[0];
console.log(streetInput);
const homeInput = inputs.inputs[1];
const codeInput = inputs.inputs[2];

document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('input', handleEvent);
	document.addEventListener('change', handleEvent);
	document.addEventListener('keypress', handleEvent);

	createRegisterSelect();
	if (registerBtn !== null) {
		registerBtn.addEventListener('click', inputsValidation);
		registerBtn.addEventListener('click', () => {
			const selectElement = document.getElementById('services') as HTMLSelectElement;
			if (selectElement !== null) {
				const selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;
				localStorage.setItem('selectedOption', selectedOptionValue);
				const selectedOptionText = selectElement.options[selectElement.selectedIndex].textContent;
				localStorage.setItem('selectedOptionText', selectedOptionText!);
			}
			localStorage.getItem('selectedOptionText');

			if (customerInput.checked) {
				localStorage.setItem('customerName', nameInput.value);
			}
			if (checkCompanyInput.checked) {
				if(citySelect){
					const selectedCityValue = citySelect.options[citySelect.selectedIndex].value;
					localStorage.setItem('companyCity', selectedCityValue);
				}
				localStorage.setItem('providerName', providerName.value);
				localStorage.setItem('companyStreet', streetInput.value);
				localStorage.setItem('companyHome', homeInput.value);
				localStorage.setItem('companyCode', codeInput.value);
				localStorage.setItem('companyEmail', companyEmail.value);
			}
			localStorage.setItem('customerEmail', emailCustomerInput.value);
			localStorage.setItem('registerPassword', passwordInput.value);
		});
	}

	const adressInputsArr = [streetInput, homeInput, citySelect, codeInput];
	const inputsArrCompany = [
		surnameInput,
		numberInput,
		passwordInput,
		repeatInput,
		select,
		companyInput,
		companyEmail,
		providerName,
	];
	const newInputsArrCompany = inputsArrCompany.concat(adressInputsArr);

	function checkInputsAndRedirect() {
		if (
			checkCompanyInput.checked &&
			newInputsArrCompany.every(input => !input.classList.contains('red-input')) &&
			!companyInput.classList.contains('red-input') &&
			!select.classList.contains('red-input') &&
			termsInput.checked
		) {
			window.location.assign('./company-panel.html');
		}
		const newInputsArr = inputsArr.slice(0, 6);
		if (
			customerInput.checked &&
			newInputsArr.every(input => !input.classList.contains('red-input')) &&
			termsInput.checked
		) {
			window.location.assign('./customer-panel.html');
		}
	}
	if (registerBtn) {
		registerBtn.addEventListener('click', checkInputsAndRedirect);
	}

	if (customerInput !== null && checkCompanyInput !== null) {
		const checkboxesArr = [customerInput, checkCompanyInput];

		function handleCheckboxClick(selectedIndex: number, checkboxes: HTMLInputElement[]) {
			checkboxes.forEach((checkbox, index) => {
				checkbox.checked = index === selectedIndex;
			});
		}
		handleCheckboxClick(0, checkboxesArr);
		checkboxesArr.forEach((checkbox, index) => {
			checkbox.addEventListener('click', function () {
				handleCheckboxClick(index, checkboxesArr);
			});
		});
	}
});
