import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const button_save = document.querySelector('.menu__save--js');
const button_load = document.querySelector('.menu__load--js');
const textarea = document.querySelector('.form__notepad--js');
const entry = localStorage.getItem('entry');

let result='';

if(entry){
result=entry;
}

button_save.addEventListener('click', ()=>{
    localStorage.setItem('entry', textarea.value);  
})

button_load.addEventListener('click', ()=>{
    textarea.value=localStorage.getItem('entry');   

})