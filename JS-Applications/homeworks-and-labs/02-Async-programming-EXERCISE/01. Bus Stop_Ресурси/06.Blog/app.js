function attachEvents() {
    // Posts - http://localhost:3030/jsonstore/blog/posts
    // Comments - http://localhost:3030/jsonstore/blog/comments
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);
    const selectRef = document.getElementById('posts');


    const endpoints = {
        allPosts: 'http://localhost:3030/jsonstore/blog/posts',

    };

    async function loadPosts(ev) {
        const response = await fetch(endpoints.allPosts);
        const data = await response.json();
        selectRef.innerHTML = '';
        Object.values(data).forEach(post => {
            selectRef.innerHTML += createOptionElement(post);
        });
    }

    function createOptionElement(data) {

        return `<option value=${data.id}>${data.title}</option>`;

    }

    async function viewPost(ev) {
        const currentPostId = selectRef.selectedOptions[0].value;
        const responseWithSinglePost = await fetch(endpoints.allPosts + '/' + currentPostId);
        const dataSinglePost = await responseWithSinglePost.json();
        debugger;
    }
}

attachEvents();