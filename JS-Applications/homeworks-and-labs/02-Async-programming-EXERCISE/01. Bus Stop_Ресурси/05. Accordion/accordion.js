async function solution() {

    // 1. fetch all articles from server
    // 2. create divs with titles //togle buttons
    // 3. on click fetch details data
    // 4. update html with data
    // http://localhost:3030/jsonstore/advanced/articles/details/:id  
    try {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error obtaining article list');
        }

        let data = await response.json();
        data.forEach(articleInfo => {
            let articleElement = document.createElement('div');
            articleElement.classList.add('accordion');
            articleElement.innerHTML =
                `
            <div class="head">
                <span>${articleInfo.title}</span>
                <button class="button" id="${articleInfo._id}" onclick="moreClick(event)">More</button>
            </div>
            <div class="extra"></div>
            `;
            let main = document.getElementById('main');
            main.appendChild(articleElement);
        });
    } catch (error) {
        console.log(error);
    }
}
async function moreClick(e) {
    try {
        let currentTarget = e.currentTarget;
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${currentTarget.id}`;
        let parent = currentTarget.parentNode.parentNode;
        let extraDiv = parent.querySelector('div.extra');

        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error obtainig article ID details');
        }

        let data = await response.json();
        console.log(data);

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