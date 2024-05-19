const fs = require('fs/promises');
const path = require('path');

const searchBar = `
<form action="/search">
    <input type="text">
    <button type="button">Search</button>
</form>`;
// static file reader
async function readFile(filePath) {
    // const data = fs.readFileSync(path.join('.', filePath));  //not a good idea to read synch. as it blocks the server
    const fileHandle = await fs.open(path.join('./' + filePath), 'r');
    return fileHandle.createReadStream();
    // return data.toString();
}

// real template reader
async function readTemplate(template) {
    const data = await fs.readFile(path.join('./views', template + '.html'));
    return data.toString();
}

// layour loeader
async function layout(body, hasSearch) {
    let layoutTemplate = await readTemplate('layout');
    let search = ''; //if hasSearch is false we will delete the bar, as it should not be visible

    if (hasSearch) {
        search = searchBar;
    }
    layoutTemplate = layoutTemplate.replace('%%searchBar%%', search);
    return layoutTemplate.replace('%%body%%', body)
}

module.exports = {
    readFile,
    readTemplate,
    layout
};
