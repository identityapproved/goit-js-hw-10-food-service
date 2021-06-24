import menu from './menu.json';
import template from './templates/events.hbs';



console.log(template)

const menuBoard = document.querySelector('.js-menu');

menuBoard.innerHTML = template(menu);

const checkboxToggleEl = document.querySelector('.theme-switch__toggle');

checkboxToggleEl.addEventListener('change', checkboxThemeHandler)

function checkboxThemeHandler() {
   if (checkboxToggleEl.checked) {
      handlerCheckedOn()
   }
   if (!checkboxToggleEl.checked) {
      handlerCheckedOff()
   }
}

function handlerCheckedOn() {
   document.body.classList.add('dark-theme');
   document.body.classList.remove('light-theme');
   localStorage.setItem('theme', JSON.stringify('dark-theme'));
   checkboxToggleEl.checked = true;
}

function handlerCheckedOff() {
   document.body.classList.add('light-theme');
   document.body.classList.remove('dark-theme');
   localStorage.setItem('theme', JSON.stringify('light-theme'))
   checkboxToggleEl.checked = false;
}

function defaultTheme() {
   const currentTheme = localStorage.getItem('theme');
   const parsedTheme = JSON.parse(currentTheme);

   if (!currentTheme || parsedTheme === 'light-theme') {
      handlerCheckedOff();
   }
   if (parsedTheme === 'dark-theme') {
      handlerCheckedOn();
   }
}

defaultTheme();

