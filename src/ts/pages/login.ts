export {}
const emailLoginInput = document.querySelector('#email-login') as HTMLInputElement;
const passwordLoginInput = document.querySelector('#password-login') as HTMLInputElement;
 const loginBtn = document.querySelector('#login-btn') as HTMLButtonElement;
 const regExEmail: RegExp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

     
       const currentPassword =   localStorage.getItem('registerPassword');

        loginBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if (!regExEmail.test(emailLoginInput.value)) {
                emailLoginInput.placeholder= 'Podaj adres e-mail';
                emailLoginInput.classList.add('red-input');
                emailLoginInput.classList.add('red-placeholder');
            }
            if (passwordLoginInput.value !== currentPassword) {
                passwordLoginInput.placeholder =  'Hasło jest niepoprawne';
                passwordLoginInput.classList.add('red-input');
                passwordLoginInput.classList.add('red-placeholder');
            }
            if(regExEmail.test(emailLoginInput.value)){
                emailLoginInput.classList.remove('red-input');
            }
            if(passwordLoginInput.value === currentPassword){
                passwordLoginInput.classList.remove('red-input');
            }
            checkLoginInputsAndRedirect()
        })

        function checkLoginInputsAndRedirect(){
            if (!emailLoginInput.classList.contains('red-input') && !passwordLoginInput.classList.contains('red-input') && localStorage.getItem('customerEmail') === emailLoginInput.value ){

                window.location.assign('./customer-panel.html');

            }else if (!emailLoginInput.classList.contains('red-input') && !passwordLoginInput.classList.contains('red-input') && localStorage.getItem('companyEmail') === emailLoginInput.value) {

                window.location.assign('./company-panel.html');
            }
        }

        console.log(localStorage.getItem('customerEmail'));