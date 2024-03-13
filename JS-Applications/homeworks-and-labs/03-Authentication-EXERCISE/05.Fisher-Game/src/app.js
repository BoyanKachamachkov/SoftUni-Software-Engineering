// if we have logged in user?
let userData = JSON.parse(sessionStorage.getItem('userData'));
//update nav

if (userData) {
    document.querySelector("a[id='login']").style.display = 'none';
    document.querySelector("a[id='register']").style.display = 'none';
    document.querySelector("a[id='logout']").style.display = 'block';

} else {
    document.querySelector("a[id='login']").style.display = 'block';
    document.querySelector("a[id='register']").style.display = 'block';
    document.querySelector("a[id='logout']").style.display = 'none';
}