export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));


}

export function clearUserData() {
    localStorage.removeItem('user');
}

// TODO Add custom validation
export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        // event.tar is the form so that the onSubmit f in view can have access to the form and be able to call form.reset() or lock the fields
        callback(Object.fromEntries(data), event.target);
    };
}