import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const button_save = document.querySelector('.menu__save--js');
const textarea = document.querySelector('.form__notepad--js');
const entry = localStorage.getItem('entry');

let result='';

if(entry){
result=entry;
}

button_save.addEventListener('click', ()=>{
    localStorage.setItem('entry', textarea.value)    
})