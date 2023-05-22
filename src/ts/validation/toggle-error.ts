export {};

export const toggleError = (input: HTMLInputElement, isError: boolean, placeholderText?: string) => {
	if (isError) {
		input.setAttribute('placeholder', placeholderText ?? 'Musisz podać jakąś wartość');
		input.classList.add('red-input');
		input.classList.add('red-placeholder');
	} else if (input.id === 'street' || input.id === 'home' || input.id === 'code' || input.id === 'city') {
		input.setAttribute('placeholder', placeholderText ?? 'Musisz podać wartość');
		input.classList.remove('red-input');
		input.classList.remove('red-placeholder');
	} else {
		input.removeAttribute('placeholder');
		input.classList.remove('red-input');
		input.classList.remove('red-placeholder');
	}
};

export const removeError = (input: HTMLInputElement) => {
	toggleError(input, false);
};
