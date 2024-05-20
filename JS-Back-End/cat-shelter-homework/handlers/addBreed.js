const { addBreed } = require('../src/model');
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
    req.on('end', async () => {
        // do smth with data
        const formData = new URLSearchParams(data);
        const breed = formData.get('breed');

        if (breed) {
            await addBreed(breed);

            res.writeHead(301, [
                'Location', '/'
            ]);
            res.end();
        } else {
            res.writeHead(301, [
                'Location', '/cats/add-breed'
            ]);
        }
    });
}

module.exports = {
    addBreedHandler,
    postBreedHandler
};