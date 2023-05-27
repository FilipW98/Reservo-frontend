export {}

export const nameInput = document.querySelector('#name') as HTMLInputElement;
export const providerName = document.createElement('input') as HTMLInputElement;
providerName.type = 'text';
providerName.className = 'input';
providerName.id = 'provider-name';
providerName.name = 'provider-name';
export const surnameInput = document.querySelector('#surname') as HTMLInputElement;
export const surnameLabel = document.querySelector('.surname-label') as HTMLInputElement;
export const numberInput = document.querySelector('#phone') as HTMLInputElement;
export const emailCustomerInput = document.querySelector('.email-customer') as HTMLInputElement;

export const confirmProviderBtn = document.querySelector('#confirm-provider') as HTMLButtonElement;

export const passwordInput = document.querySelector('#password') as HTMLInputElement;
export const repeatInput = document.querySelector('#repeat') as HTMLInputElement;
export const termsInput = document.querySelector('#terms') as HTMLInputElement;
export const termsBox = document.querySelector('.register-terms') as HTMLElement;
export const termsError = document.createElement('p');
export const select = document.createElement('select');
export const companyEmail = document.createElement('input');
export const companyInput = document.createElement('input');
export const citySelect = document.createElement('select');
citySelect.className = "input";
citySelect.id = "citySelect";

export const inputsArr = [
	nameInput,
	surnameInput,
	numberInput,
	emailCustomerInput,
	passwordInput,
	repeatInput,
	select,
	citySelect,
	providerName,
	companyInput,
	companyEmail,
];

