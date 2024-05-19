const { readTemplate, layout } = require('../src/util');


async function addBreedHandler(req, res) {
    const template = await readTemplate('addBreed');

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(await layout(template, false));  //addBreed should not have search, passing false is not mandatory as it would be undefined if we don't pass anything and thus falsy value for the same effect.
    res.end();

}

// action to same controller for posting
async function postBreedHandler(req, res) {

    let data = '';
    req.on('data', (chunk) => data += chunk.toString());
    req.on('end', () => {
        // do smth with data
        console.log(new URLSearchParams(data))
    })


    res.statusCode = 204;
    res.end();

}

module.exports = {
    addBreedHandler,
    postBreedHandler
};