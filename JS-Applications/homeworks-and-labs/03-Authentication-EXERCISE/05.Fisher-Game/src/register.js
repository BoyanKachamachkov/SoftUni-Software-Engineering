document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target)
    debugger
}

