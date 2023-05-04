const menu = document.querySelector('.nav__list');
const navButton = document.querySelector('#menu');
const navMenu = document.querySelector('.hamburger')


navButton.addEventListener('click', (e) =>{

    menu.classList.toggle('nav__list--active');


    if(menu.classList.contains("nav__list--active")){
        navMenu.setAttribute('src', 'images/icon-close.svg');
    }else{
        navMenu.setAttribute('src', 'images/icon-hamburger.svg');
    }
});