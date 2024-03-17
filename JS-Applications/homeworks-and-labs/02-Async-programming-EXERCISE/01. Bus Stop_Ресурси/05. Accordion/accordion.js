async function solution() {

    // 1. fetch all articles from server
    // 2. create divs with titles //togle buttons
    // 3. on click fetch details data
    // 4. update html with data


    try {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        let response = await fetch(url);

        if(!response.ok){
            throw new Error('Error obtaining article list')
        }

        let data = await response.json()

        data.foreach(articleInfo =>{

            let articleEleemnt = document.createElement('div')
            articleEleemnt.classList.add('accordion')
            articleEleemnt.innerHTML = `
            <div class="head">
                <span>${articleInfo.title}
            `

        })
    } catch (error) {

    }

}

solution()