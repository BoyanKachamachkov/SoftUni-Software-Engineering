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
        debugger;
        data.forEach(articleInfo => {
            let artEl = document.createElement('div');
            artEl.classList.add('accordion');
            artEl.innerHTML = `
            <div class="head">
                <span>${articleInfo.title}</span>
                <button class="button" id="${articleInfo._id}" onclick="onMoreClick(e)">More</button>
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


async function onMoreClick(e) { }

solution();