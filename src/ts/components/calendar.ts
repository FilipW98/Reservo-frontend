export{}

const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".icons i");
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec",
              "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
       
 const currRealMonth = months[currMonth];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    if(currentDate){
        currentDate!.textContent = `${months[currMonth]} ${currYear}`; 
    }
    if(daysTag){
        daysTag!.innerHTML = liTag;
    }
}
renderCalendar();

const dayAcitveClassToggler = () => {
    const allLi = document.querySelectorAll('.days li');

    allLi.forEach(li => {
		li.addEventListener('click', () => {

            allLi.forEach(li => {
                li.classList.remove('active2');
        });

            if(li.className === 'inactive' || li.className === 'active'){
                console.log('wbijam');
                 li.classList.remove('active2');
             } else{
                console.log('dodaje klase');
                 li.classList.add('active2');
               }
		});
	});
}

if(prevNextIcon){
    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => { 
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if(currMonth < 0 || currMonth > 11) { 
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); 
                currMonth = date.getMonth(); 
            } else {
                date = new Date(); 
            }
            renderCalendar(); 
            dayAcitveClassToggler()
            addClickEvents()
        });
    });
}

dayAcitveClassToggler()

const scissorsIcon: HTMLElement | null = document.querySelector('.hours-cut');
const wrenchIcon: HTMLElement | null = document.querySelector('.hours-wrench');
const pencilIcon: HTMLElement | null = document.querySelector('.hours-pencil');
const iconsArr = [scissorsIcon,wrenchIcon,pencilIcon];
const hoursContainer: HTMLElement | null = document.querySelector('.hours-container');
const hoursBoxInfo = document.querySelector('.hours-container__info-span') as HTMLSpanElement;
const hourBtns: NodeListOf<Element> = document.querySelectorAll('.hour-btn');

const handleClick = (e:Event) => {
	const li = e.target as HTMLElement;
	const pickedDay = Number(li.textContent);
	const today = new Date();
	const pickedDate = new Date(date.getFullYear(), date.getMonth(), pickedDay);

	if (li.textContent !== '' && !li.classList.contains('inactive')  &&(pickedDate.getDate() == today.getDate() || pickedDate > today && currentDate?.textContent?.includes(currRealMonth)) ) {
		if(hoursBoxInfo){
			hoursBoxInfo.textContent = pickedDate.getDate() + " " + currentDate?.textContent?.slice(0,currentDate?.textContent.length - 4);
			hoursContainer!.style.display = 'flex';
            iconsArr.forEach(icon => {
                icon!.style.display = "block";
            })            
		}
	} if (li.textContent !== '' && !li.classList.contains('inactive') && !currentDate?.textContent?.includes(currRealMonth)) {
        if(hoursBoxInfo){
			hoursBoxInfo.textContent = pickedDate.getDate() + " " + currentDate?.textContent?.slice(0,currentDate?.textContent.length - 4);
			hoursContainer!.style.display = 'flex';
            iconsArr.forEach(icon => {
                icon!.style.display = "block";
            })            
		}
    }  else if (pickedDate < today && !li.classList.contains('inactive')  && currentDate?.textContent?.includes(currRealMonth) ) {
		alert('Ten dzień już minął!');
        li.classList.remove('active2');
		return;
	} 
};

	const exitIcon = document.querySelector('.fa-times');
	exitIcon?.addEventListener('click', () => {
        hoursContainer!.style.display = 'none';
        iconsArr.forEach(icon => {
            icon!.style.display = "none";
        })
        const allLi = document.querySelectorAll('.days li');
        allLi.forEach(li => {
            li.classList.remove('active2');
        })
		hourBtns.forEach(btn => {
			btn.classList.remove('active-hour-btn');
		})
	});

    const activeClassButtonToggler = () => {
        hourBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active-hour-btn')) {
                    btn.classList.remove('active-hour-btn');
                } else {
                    hourBtns.forEach(btn => {
                        btn.classList.remove('active-hour-btn');
                    });
                    btn.classList.add('active-hour-btn');
                }
            });
        });
    };
    
activeClassButtonToggler()
const addClickEvents = () => {
    const allLi = document.querySelectorAll('.days li');
	allLi.forEach(li => {
		li.addEventListener('click', handleClick);
	});
};
addClickEvents()