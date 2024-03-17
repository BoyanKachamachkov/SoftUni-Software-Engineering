function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const postsSelect = document.querySelector('select#posts');


    // add events
    btnLoadPosts.addEventListener('click', handleLoadPosts);
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

}
attachEvents();