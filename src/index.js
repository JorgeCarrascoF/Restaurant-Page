import {createHeader, createHomeScreen, createAboutScreen, createMenuScreen, createContactScreen} from "./initial";

let content = document.getElementById('content');
createHeader(content);

let mainContent = content.appendChild(document.createElement('div'));
mainContent.classList.add('main-content');

createHomeScreen(mainContent);
createAboutScreen(mainContent);
createMenuScreen(mainContent);
createContactScreen(mainContent);

let homeScreen = document.getElementById('home-screen');
let aboutScreen = document.getElementById('about-screen');
let menuScreen = document.getElementById('menu-screen');
let contactScreen = document.getElementById('contact-screen');

let homeButton = document.getElementById('homeLink');
homeButton.addEventListener('click', ()=>{
    homeScreen.classList.remove('disabled');
    aboutScreen.classList.add('disabled');
    menuScreen.classList.add('disabled');
    contactScreen.classList.add('disabled');
})

let aboutButton = document.getElementById('aboutLink');
aboutButton.addEventListener('click', ()=>{
    homeScreen.classList.add('disabled');
    aboutScreen.classList.remove('disabled');
    menuScreen.classList.add('disabled');
    contactScreen.classList.add('disabled');
})

let menuButton = document.getElementById('menuLink');
menuButton.addEventListener('click', ()=>{
    homeScreen.classList.add('disabled');
    aboutScreen.classList.add('disabled');
    menuScreen.classList.remove('disabled');
    contactScreen.classList.add('disabled');
})

let contactButton = document.getElementById('contactLink');
contactButton.addEventListener('click', ()=>{
    homeScreen.classList.add('disabled');
    aboutScreen.classList.add('disabled');
    menuScreen.classList.add('disabled');
    contactScreen.classList.remove('disabled');
})
