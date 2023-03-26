// import{registerBtn, toggleError, inputsEvents} from "./main"

export const adressFields = [
	{ id: 'street', placeholder: 'Ulica', name: "street"},
	{ id: 'home', placeholder: 'Nr.domu',name: 'home' },
	{ id: 'city', placeholder: 'Miasto',name: 'city'},
	{ id: 'code', placeholder: 'Kod pocztowy',name: 'code'},
];

export const companyAdress = document.createElement('div');
companyAdress.className = 'company-adress';

 const companyAdressTitle = document.createElement('h2');
companyAdressTitle.className = 'company-adress-title';
companyAdressTitle.innerText = 'Adres pocztowy firmy';

const companyAdressPlace = document.createElement('div');
companyAdressPlace.className = 'company-adress-place';


export const dataInputsCreator = (
	registerBtn: HTMLButtonElement,
	toggleError: (input: HTMLInputElement, isError: boolean, placeholderText?: string) => void,
	inputsEvents: (event: Event) => void,
	checkCompanyInput:HTMLInputElement
) => {
	
	adressFields.forEach(field => {
		const adressDiv = document.createElement('div');
		adressDiv.className = 'company-adress-data';
		let adressInput = document.createElement('input');

		adressInput.className = 'input';
		adressInput.type = 'text';
		adressInput.name = field.name;
		adressInput.id = field.id;
		
		adressInput.placeholder = field.placeholder;

			checkCompanyInput.addEventListener('change', () => {
				if(checkCompanyInput.checked){
				toggleError(adressInput,false,field.placeholder);
			}
		})

		registerBtn.addEventListener('click', (e) => {
			e.preventDefault()
			let placeholderText = '';
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
			if (adressInput.value === '') {
				toggleError(adressInput, true, placeholderText);

			} else {
				toggleError(adressInput, false);
			}

		});
		adressDiv.appendChild(adressInput);
		companyAdressPlace.appendChild(adressDiv);

		if (adressInput.id === 'home' || adressInput.id === 'code') {
			adressInput.addEventListener('input', inputsEvents);
		}
	});
};

companyAdress.append(companyAdressTitle,companyAdressPlace);





// document.addEventListener('DOMContentLoaded', () => {
// 	dataInputsCreator(registerBtn, toggleError, inputsEvents, checkCompanyInput);
// })