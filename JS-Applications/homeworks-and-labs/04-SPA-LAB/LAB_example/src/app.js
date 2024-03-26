import registerPage from './registerPage.js';

let pages = {
    'register': registerPage,
};


let headerElement = document.querySelector('.header .nav').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let dataLink = e.target.getAttribute('data-link');
        let currentView = pages[dataLink] || {};

        currentView.showPage()
    }
});