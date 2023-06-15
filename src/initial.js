// import { appendFile } from "graceful-fs";

function createHeader(div){
    let header = div.appendChild(document.createElement('div'));
    header.classList.add('header');

    let restaurantName = header.appendChild(document.createElement('span'));
    restaurantName.innerText = 'Elysium';

    let links = header.appendChild(document.createElement('div'));
    links.classList.add('links');

    let homeLink = links.appendChild(document.createElement('a'));
    homeLink.id = 'homeLink';
    homeLink.innerText = 'Home';
    
    let aboutLink = links.appendChild(document.createElement('a'));
    aboutLink.id = 'aboutLink';
    aboutLink.innerText = 'About';

    let menuLink = links.appendChild(document.createElement('a'));
    menuLink.id = 'menuLink';
    menuLink.innerText = 'Menu'

    let contactLink = links.appendChild(document.createElement('a'));
    contactLink.id = 'contactLink';
    contactLink.innerText = 'Contact'
}

function createHomeScreen(div){
    let homeScreen = div.appendChild(document.createElement('div'));
    homeScreen.classList.add('home-screen');
    homeScreen.id = 'home-screen';

    let firstCol50 = homeScreen.appendChild(document.createElement('div'));
    firstCol50.classList.add('col-50');

    let card = firstCol50.appendChild(document.createElement('div'));
    card.classList.add('card');

    let span1 = card.appendChild(document.createElement('span'));
    span1.innerHTML = ' <cite>"A symphony of modern flavors"</cite> <br> — Barcelona Gacette'
    
    let span2 = card.appendChild(document.createElement('span'));
    span2.innerHTML = ' <cite>"Innovation is the first ingredient"</cite> <br> — Seven Dining Sins '
    
    let span3 = card.appendChild(document.createElement('span'));
    span3.innerHTML = ` <cite>"Who would say that THAT'S edible?"</cite> <br> — Foodie Focus `
    
    // Maybe i can just add the first col-50 again?
    
    let secondCol50 = homeScreen.appendChild(document.createElement('div'));
    secondCol50.classList.add('col-50');    
}

function createAboutScreen(div){
    let aboutScreen = div.appendChild(document.createElement('div'));
    aboutScreen.classList.add('about-screen');
    aboutScreen.classList.add('disabled');
    aboutScreen.id = 'about-screen';

    let firstCol50 = aboutScreen.appendChild(document.createElement('div'));
    firstCol50.classList.add('col-50');

    let whoCard = firstCol50.appendChild(document.createElement('div'));
    whoCard.classList.add('who');

    let span = whoCard.appendChild(document.createElement('span'));
    span.innerText = 'Who are we?';

    let bar = whoCard.appendChild(document.createElement('div'));
    bar.classList.add('bar')

    let p1 = whoCard.appendChild(document.createElement('p'));
    p1.innerText = `We're a modern restaurant based on innovation and creativity. Our main objective is to surprise our diners with high-quality ingredients and never-seen-before techniques brought from exotic cultures.`

    let p2 = whoCard.appendChild(document.createElement('p'));
    p2.innerText = `We believe that every food ingredient has its own story, and it's important to trasmit it through generations to preserve flavor and regional culture.`

    let p3 = whoCard.appendChild(document.createElement('p'));
    p3.innerText = `We work with dozens of restaurants across the world to make sure we all learn of each other wisdom and give our customers the experience they don't know they want, but they deserve.`

    let secondCol50 = aboutScreen.appendChild(document.createElement('div'));
    secondCol50.classList.add('col-50');

    let aboutImg = secondCol50.appendChild(document.createElement('div'));
    aboutImg.classList.add('about-img');
}

function createMenuScreen(div){
    let menuScreen = div.appendChild(document.createElement('div'));
    menuScreen.classList.add('menu-screen');
    menuScreen.classList.add('disabled');   
    menuScreen.id = 'menu-screen';

    // Card creation

    let card1 = menuScreen.appendChild(document.createElement('div'));
    card1.classList.add('card');
    card1.id = 'card1';

    let filterCard1 = card1.appendChild(document.createElement('div'));
    filterCard1.classList.add('filter');

    let spanCard1 = filterCard1.appendChild(document.createElement('span'));
    spanCard1.innerText = 'Cookroaches with soy';

    // ---------------------------

    let card2 = menuScreen.appendChild(document.createElement('div'));
    card2.classList.add('card');
    card2.id = 'card2';

    let filterCard2 = card2.appendChild(document.createElement('div'));
    filterCard2.classList.add('filter');

    let spanCard2 = filterCard2.appendChild(document.createElement('span'));
    spanCard2.innerText = 'Crocodile eggs with chive';

    // ---------------------------

    let card3 = menuScreen.appendChild(document.createElement('div'));
    card3.classList.add('card');
    card3.id = 'card3';

    let filterCard3 = card3.appendChild(document.createElement('div'));
    filterCard3.classList.add('filter');

    let spanCard3 = filterCard3.appendChild(document.createElement('span'));
    spanCard3.innerText = 'Pork brain with mayo';

    // ---------------------------

    let card4 = menuScreen.appendChild(document.createElement('div'));
    card4.classList.add('card');
    card4.id = 'card4';

    let filterCard4 = card4.appendChild(document.createElement('div'));
    filterCard4.classList.add('filter');

    let spanCard4 = filterCard4.appendChild(document.createElement('span'));
    spanCard4.innerText = 'Irish fungus with anchovies';

    // ---------------------------

    let card5 = menuScreen.appendChild(document.createElement('div'));
    card5.classList.add('card');
    card5.id = 'card5';

    let filterCard5 = card5.appendChild(document.createElement('div'));
    filterCard5.classList.add('filter');

    let spanCard5 = filterCard5.appendChild(document.createElement('span'));
    spanCard5.innerText = 'Lamb testicles';

    // ---------------------------

    let card6 = menuScreen.appendChild(document.createElement('div'));
    card6.classList.add('card');
    card6.id = 'card6';

    let filterCard6 = card6.appendChild(document.createElement('div'));
    filterCard6.classList.add('filter');

    let spanCard6 = filterCard6.appendChild(document.createElement('span'));
    spanCard6.innerText = 'Raw salmon with avocado';

    // ---------------------------

    let card7 = menuScreen.appendChild(document.createElement('div'));
    card7.classList.add('card');
    card7.id = 'card7';

    let filterCard7 = card7.appendChild(document.createElement('div'));
    filterCard7.classList.add('filter');

    let spanCard7 = filterCard7.appendChild(document.createElement('span'));
    spanCard7.innerText = `Bloodymary's sandwich`;

    // ---------------------------

    let card8 = menuScreen.appendChild(document.createElement('div'));
    card8.classList.add('card');
    card8.id = 'card8';

    let filterCard8 = card8.appendChild(document.createElement('div'));
    filterCard8.classList.add('filter');

    let spanCard8 = filterCard8.appendChild(document.createElement('span'));
    spanCard8.innerText = 'Prawns with jam';

    // ---------------------------

    let card9 = menuScreen.appendChild(document.createElement('div'));
    card9.classList.add('card');
    card9.id = 'card9';

    let filterCard9 = card9.appendChild(document.createElement('div'));
    filterCard9.classList.add('filter');

    let spanCard9 = filterCard9.appendChild(document.createElement('span'));
    spanCard9.innerText = 'Octopus with gambas salad';

    // ---------------------------

    let card10 = menuScreen.appendChild(document.createElement('div'));
    card10.classList.add('card');
    card10.id = 'card10';

    let filterCard10 = card10.appendChild(document.createElement('div'));
    filterCard10.classList.add('filter');

    let spanCard10 = filterCard10.appendChild(document.createElement('span'));
    spanCard10.innerText = 'Chicken alla campestre';
}

function createContactScreen(div){
    let contactScreen = div.appendChild(document.createElement('div'));
    contactScreen.classList.add('contact-screen');
    contactScreen.classList.add('disabled');
    contactScreen.id = 'contact-screen'

    let firstCol50 = contactScreen.appendChild(document.createElement('div'));
    firstCol50.classList.add('col-50');

    let contactImg = firstCol50.appendChild(document.createElement('div'));
    contactImg.classList.add('contact-img');

    let secondCol50 = contactScreen.appendChild(document.createElement('div'));
    secondCol50.classList.add('col-50');

    let contact = secondCol50.appendChild(document.createElement('div'));
    contact.classList.add('contact');

    let span = contact.appendChild(document.createElement('span'));
    span.innerText = 'How to contact us?';

    let bar = contact.appendChild(document.createElement('div'));
    bar.classList.add('bar');

    let p = contact.appendChild(document.createElement('p'));
    p.innerHTML = `If you're interested in contacting us for business, you can find us in Fake Str 123, Barcelona. We'll be pleased to arrange a meeting with you by phone or email, to make sure we can dedicate the necessary time to your proposal. <br> <br> If you're looking to book a table, please download our mobile app or email us at fakemail123@averagemailcompany.com`;

}

export {createHeader, createHomeScreen, createAboutScreen, createMenuScreen, createContactScreen};