const { getCats } = require("../src/model");
const { layout, readTemplate } = require("../src/util");
// const cats = require('../data/cats.json');  don't read JSON directly


function catFragment(cat) {
    return `
<li>
    <img src="${cat.imageUrl}"
        alt="${cat.name} cat">
    <h3>${cat.name}</h3>
    <p><span>Breed: </span>${cat.breed}</p>
    <p><span>Description: </span>${cat.description}</p>
    <ul class="buttons">
        <li class="btn edit"><a href="">Change Info</a></li>
        <li class="btn delete"><a href="">New Home</a></li>
    </ul>
</li>`;
}


async function homeHandler(req, res) {

    const template = await readTemplate('home/index');

    const cats = await getCats()
    const html = template.replace('%%catContent%%', cats.map(catFragment).join('\n'));

    res.writeHead(200, [
        'Content-type', 'text/html'
    ]);
    res.write(await layout(html, true)); //pass true, as index should have searchBar
    res.end();

}


module.exports = {
    homeHandler
};