export {};

const burgerBtn = document.querySelector('#burger-btn') as HTMLButtonElement;
const nav = document.querySelector('#mobile-nav');
const allNavLi = document.querySelectorAll('.nav-shadow-box__user-box-side-nav ul li');
const body = document.querySelector('body');
const sections = document.querySelectorAll('.section');

if ( burgerBtn) {
	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('open');
				nav!.classList.toggle('nav--active');
				body!.classList.toggle('body-overflow');
				allNavLi.forEach(li => {
					li!.classList.toggle('li--active');
				});
			});
}

export const burgerBtnSpans = document.querySelectorAll('#burger-btn span') as NodeListOf<HTMLElement>;
const calendarSection = document.querySelector('.customer-calendar') as HTMLElement;

const handleObserver = () => {
	const currentSection = window.scrollY;
	sections.forEach(section => {
		 if (!section.classList.contains('white-section') && section instanceof HTMLElement && section.offsetTop <= currentSection + 100 ) {
			burgerBtnSpans.forEach(span => {
				span.style.backgroundColor = 'white';
			});
		}
	});
	sections.forEach(section => {
		if (section.classList.contains('white-section') && section instanceof HTMLElement && section.offsetTop <= currentSection + 100 ) {
			burgerBtnSpans.forEach(span => {
				span.style.backgroundColor = 'black';
			});
		}	
	})
	if (calendarSection) {
		if(calendarSection.offsetTop <= currentSection + 100){
			burgerBtnSpans.forEach(span => {
				span.style.backgroundColor = 'white';
			});
		}
	}
	if (window.location.href.includes('customer-panel')){
		if (calendarSection) {
			if(window.innerWidth <= 576 && calendarSection.offsetTop <= window.scrollY ) {
				burgerBtnSpans.forEach(span => {
					span.style.backgroundColor = 'black';
				});
				}
		}
	}
	};

	window.addEventListener('scroll', handleObserver);
