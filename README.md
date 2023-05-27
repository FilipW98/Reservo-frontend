
<div align="center">
  <h1>Reservo <img src="./src/img/pencil.png" alt="pencil icon" width="30px"></h1>
</div>



<div align="center">
This project is intended both for people looking for a specific service (customers) and for people who run a business and want to acquire customers. With the right backend, this app would allow the customer to book an appointment at a specific time and place. On the other hand, people providing services have access to a calendar in their panel, which could display the days on which they have an appointment with the client to perform their service. Keep in mind that the app is not finished, I'm still working on it.
</div>



##   <div align="center" ><a href="https://myreservo.github.io/Reservo-frontend/" target="_blank" rel="noreferrer"> <img src="./assets/img/live-icon.png" alt="live icon" width="100" height="50" /> </a>  </div>




## Tech Stack

  
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/JavaScript.svg" alt="Javascript icon" width="47" height="47"/> </a> 
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" alt="Type Script icon" width="47" height="47"/> </a> 
<a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/HTML.svg" alt="HTML icon" width="47" height="47"/> </a> 
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Sass.svg" alt="Sass icon" width="47" height="47"/> </a> 
<a href="https://www.cypress.io" target="_blank" rel="noreferrer"> <img src="https://github.com/FilipW98/FilipW98/blob/main/Cypress_Logomark_Color_Dark_BG%201.png" alt="Cypress icon" width="47" height="47"/></a>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Vite-Dark.svg" alt="Vite icon" width="47" height="47" /></a> 


## Features

- Registration as a customer and as a person providing services
- Login - Thanks to local storage, after successful registration, you can log out and then log in using the same e-mail address and password that you provided during registration
- Responsive Web Design
- This app is tested with Cypress (full test will be written soon)


## Installation

To run this project, you must have the following dependencies installed:
- Node.js and NPM (https://nodejs.org)
- Vite (https://vitejs.dev)
- Git (https://git-scm.com)

The project has no specific requirements for Node.js and NPM versions, but I recommend using the latest stable versions to avoid compatibility issues.
### To install the project, follow these steps:
#### 1. Install Node.js and NPM:

Go to the official Node.js website - https://nodejs.org/en/download/

Select the appropriate installation file for your operating system and download it.

After downloading the setup file, run it and follow the on-screen instructions.

Verify that Node.js and NPM have been installed correctly by typing in the command line: <br>
 <img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/img/npm-version.png" alt="node and npm version code" width="650" height="180"/> 

#### 2. Clone this repository using the Git command: (before clone, make sure You have installed git on Your computer)
<img src="https://raw.githubusercontent.com/MyReservo/Reservo-frontend/master/assets/img/clone.png" alt="clone code" width="680" height="130" />

#### 3. Navigate to the directory where you cloned the repository using the cd command. For example, if You cloned the repository to Your "MyFolder", You have to  type the correct path to this folder, for e.g. the following command:
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/img/cd-myfolder.png" alt="instal vite code" width="460" height="130" />

 #### 4. Install Vite globally using the NPM command:
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/img/vite.png" alt="instal vite code" width="300" height="130" />

#### 5. To run the project, use the NPM command:
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/img/runDev.png" alt="run dev code" width="220" height="110" />

#### 6. To build the project, use the NPM command:
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/img/buildDev.png" alt="run build code" width="760" height="130" />

#### 7. Go to the project directory and install all NPM dependencies by typing in the console:
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/img/npmInstall.png" alt="install npm dep code" width="220" height="130" />


 ## How it's working?
 
 - After You run the application, the first window You will see is the registration form. You can register as a customer or as a service provider
 - After pressing the "rejestruj" button, the validation of the form will be started
 - You will be transferred to the appropriate panel after the form has been correctly completed
 - In order to test the application after registering as a company, You can register as a customer and then You will be transferred to the customer panel, where You can select the service (so far there are 3 to choose from). Then after selecting the appropriate city and selecting the option to display the address of the local, the address of the company should appear that was entered during registration of a company and the name of the service provider
 
 - In the future, a script will be added, thanks to which, after the customer selects the appropriate day in the calendar and the appropriate time, data will be sent to the calendar in the service provider's panel.

## Screenshots
### - Registration panel for customer
<img src="https://raw.githubusercontent.com/MyReservo/Reservo-frontend/master/assets/screenshots/registration-panel.png" alt="registration screenshot" style="width:60%;">

### - Registration panel for service provider/company
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/registration-company.png" alt="registration screenshot" style="width:60%;">

### - Login panel
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/login.png" alt="login screenshot" style="width:60%;">

### Customer panel
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/customer-head.png" alt="landing page screenshot" style="width:70%;">
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/your-visit.png" alt="pick person screenshot" style="width:60%;">
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/calendar-customer.png" alt="calendar screenshot" style="width:60%;">

### Mobile version
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/mobile-customer-panel.png" alt="mobile screenshot" style="width:50%;">


### Service provider/ company panel
#### Panel for tutors
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/tutor-panel.png" alt="panel for tutors screenshot" style="width:70%;">

#### Panel for barbers
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/barber.png" alt="panel for barbers screenshot" style="width:70%;">

#### Panel for mechanics
<img src="https://github.com/MyReservo/Reservo-frontend/blob/master/assets/screenshots/mechanic.png" alt="panel for mechanics screenshot" style="width:70%;">

 
