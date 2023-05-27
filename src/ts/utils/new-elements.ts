export {}

import {citySelect} from "./constants"

export const companyAdress = document.createElement('div');
companyAdress.className = 'company-adress-login';

const companyAdressTitle = document.createElement('h2');
companyAdressTitle.className = 'company-adress-title';
companyAdressTitle.innerText = 'Adres pocztowy firmy';

const companyAdressPlace = document.createElement('div');
companyAdressPlace.className = 'company-adress-place';

const adressDiv = document.createElement('div');
adressDiv.className = 'company-adress-data';

export const adressFields = [
	// { id: 'city', placeholder: 'Miasto',name: 'city'},
	{ id: 'street', placeholder: 'Ulica', name: "street"},
	{ id: 'home', placeholder: 'Nr.domu',name: 'home' },
	{ id: 'code', placeholder: 'Kod pocztowy',name: 'code'},
];

export const citiesSelect = [
	{ id: 'default', label: 'Wybierz miasto'},
	{ id: 'wroclaw', label: 'Wrocław'},
	{ id: 'warsaw', label: 'Warszawa'},
	{ id: 'carcow', label: 'Kraków'},
];
export const dataInputsCreator = (
	registerBtn: HTMLButtonElement,
	toggleError: (input: HTMLInputElement, isError: boolean, placeholderText?: string) => void,
	inputsEvents: (event: Event) => void,
	checkCompanyInput:HTMLInputElement | null,
) : { inputs: HTMLInputElement[], adressInput?: HTMLInputElement } => {

	const inputs: HTMLInputElement[] = [];


	citiesSelect.forEach(option =>{
		const cityOption = document.createElement('option');
		cityOption.textContent = option.label;
		cityOption.id = option.id;
		console.log(cityOption.id);
		if (cityOption.id === 'default') {
			cityOption.disabled = true;
			cityOption.selected = true;
		}
		citySelect.append(cityOption);
	})
	adressDiv.append(citySelect);
	companyAdressPlace.append(adressDiv);
	console.log(citySelect);




	adressFields.forEach(field => {
		const adressDiv = document.createElement('div');
		let adressInput = document.createElement('input');
		adressDiv.className = 'company-adress-data';
		adressInput.className = 'input';
		adressInput.type = 'text';
		adressInput.name = field.name;
		adressInput.id = field.id;
		adressInput.placeholder = field.placeholder;
		adressInput.setAttribute('required', "");
		
		let checkCompanyInputChecked = false;
		
		if (checkCompanyInput !== null) { 
			checkCompanyInput.addEventListener('change', () => { 
					if(checkCompanyInput.checked && checkCompanyInputChecked == false){
						adressInput.classList.remove('red-input');
						adressInput.classList.remove('red-placeholder');
						adressInput.removeAttribute('placeholder');
							if (adressInput !== undefined) {
								toggleError(adressInput, false, field.placeholder);
							}
					} else if (checkCompanyInput.checked  && checkCompanyInputChecked == true){			
					}
			})
		}

			if (registerBtn) {
				registerBtn.addEventListener('click', (e) => {
					e.preventDefault()
					let placeholderText = '';
	
					if(adressInput !== undefined){
						switch (adressInput.id) {
							
							case 'street':
								placeholderText = 'Podaj nazwę ulicy';
								break;
							case 'home':
								placeholderText = 'Podaj numer domu';
								break;
							case 'city':
								placeholderText = 'Podaj nazwę miasta';
								break;
							case 'code':
								placeholderText = 'Podaj kod pocztowy';
								break;
							default:
								break;
						}
					}
	
					if(adressInput !== undefined){
						if (adressInput.value === '') {
							toggleError(adressInput, true, placeholderText);
						} else {
							toggleError(adressInput, false);
						}
					}
					if(!/^\d{2}-\d{3}$/.test(adressInput.value) && adressInput.id === "code"){
						toggleError(adressInput, true, 'Podaj kod pocztowy');
					}
	
				});
			}
			
			adressDiv.appendChild(adressInput);
			companyAdressPlace.appendChild(adressDiv);
			if (adressInput.id === 'home' || adressInput.id === 'code') {
				adressInput.addEventListener('input', inputsEvents);
			}			
			inputs.push(adressInput)
		});
		return { inputs };
	};
companyAdress.append(companyAdressTitle,companyAdressPlace);
