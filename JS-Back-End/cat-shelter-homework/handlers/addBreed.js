const { readTemplate, layout } = require('../src/util');


async function addBreedHandler(req, res) {
    const template = await readTemplate('addBreed');

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(await layout(template, false));  //addBreed should not have search, passing false is not mandatory as it would be undefined if we don't pass anything and thus falsy value for the same effect.
    res.end();

}

module.exports = {
    addBreedHandler
};