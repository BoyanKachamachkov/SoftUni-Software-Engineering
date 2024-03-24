let headerElement = document.querySelector('.header .nav').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        console.log(e.target.getAttribute('data-link'));
    } else {
        console.log('not A');
    }
});