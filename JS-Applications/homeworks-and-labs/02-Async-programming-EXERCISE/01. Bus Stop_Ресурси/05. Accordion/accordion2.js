async function solution() {

    // 1. fetch all articles from server
    // 2. create divs with titles //togle buttons
    // 3. on click fetch details data
    // 4. update html with data
    // http://localhost:3030/jsonstore/advanced/articles/details/:id  


    try {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('failed to obtain articles list');
        }

        const data = await response.json();
        data.forEach(articleInfo => {
            let artEl = document.createElement('div');
            artEl.classList.add('accordion');
            artEl.innerHTML = `
            <div class="head">
                <span>${articleInfo.title}</span>
                <button class="button" id="${articleInfo._id}" onclick="onMoreClick(event)">More</button>
            </div>
            <div class="extra"></div>
            `;

            let main = document.getElementById('main');
            main.appendChild(artEl);

        });
    } catch (error) {
        console.log(error);

    }
}

async function onMoreClick(e) {

    try {
        let currentTarget = e.currentTarget;

        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${currentTarget.id}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch article ID');
        }
        const data = await response.json();

        let parent = currentTarget.parentNode.parentNode;
        let extraDiv = parent.querySelector('div.extra');

        extraDiv.innerHTML = `<p>${data.content}</p>`;

        if (currentTarget.textContent == 'More') {
            currentTarget.textContent = 'Less';
            extraDiv.style.display = 'block';

        } else {
            currentTarget.textContent = 'More';
            extraDiv.style.display = 'none';
        }

    } catch (error) {
        console.log(error);

    }
}

solution();