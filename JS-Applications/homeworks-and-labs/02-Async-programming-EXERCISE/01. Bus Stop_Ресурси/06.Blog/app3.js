function attachEvents() {
    // Posts - http://localhost:3030/jsonstore/blog/posts
    // Comments - http://localhost:3030/jsonstore/blog/comments

    const loadPostsBtn = document.getElementById('btnLoadPosts');




    loadPostsBtn.addEventListener('click', loadAllPosts);

    async function loadAllPosts(e) {
        const url = 'http://localhost:3030/jsonstore/blog/posts';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        debugger;
    }

}
attachEvents();