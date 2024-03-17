function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postsSelect = document.querySelector('select#posts');
    const postTitle = document.getElementById('post-title');
    const postContent - document.getElementById('post-body');


    // add events
    btnLoadPosts.addEventListener('click', handleLoadPosts);
    btnViewPost.addEventListener('click', handleViewPost);
    let commonData;

    function handleLoadPosts() {
        // get posts
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => addPosts(data));


        function addPosts(data) {
            commonData = data;

            postsSelect.innerHTML = '';


            for (let [id, postInfo] of Object.entries(data)) {
                // create option
                let option = document.createElement('option');
                option.value = id;
                option.textContent = postInfo.title;
                option.dataset.body = postInfo.body;
                postsSelect.appendChild(option);
            }

        }
    }

    function handleViewPost() {
        // get postID
        let selectedPostId = document.getElementById('posts').value;


    }

}
attachEvents();