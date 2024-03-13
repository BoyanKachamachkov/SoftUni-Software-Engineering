// if we have logged in user?
document.querySelector("a[id='home']").classList.add('active')
let userData = JSON.parse(sessionStorage.getItem('userData'));
//update nav

if (userData) {
    document.querySelector('nav p span').textContent = userData.email;
    document.querySelector("a[id='login']").style.display = 'none';
    document.querySelector("a[id='register']").style.display = 'none';
    document.querySelector("a[id='logout']").style.display = 'inline-block';

} else {
    document.querySelector('nav p span').textContent = 'guest';

    document.querySelector("a[id='login']").style.display = 'inline-block';
    document.querySelector("a[id='register']").style.display = 'inline-block';
    document.querySelector("a[id='logout']").style.display = 'none';
}