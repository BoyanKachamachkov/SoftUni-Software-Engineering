function attachEvents() {
    // Posts - http://localhost:3030/jsonstore/blog/posts
    // Comments - http://localhost:3030/jsonstore/blog/comments
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);


    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'Comments - http://localhost:3030/jsonstore/blog/comments';

    async function loadPosts(ev) {
        const res = await fetch(postsURL);
        const postsData = await res.json();
        console.log(postsData);

    }

    async function viewPost(ev) { }
}

attachEvents();