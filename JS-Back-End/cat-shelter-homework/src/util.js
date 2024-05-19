const fs = require('fs/promises');
const path = require('path');

// static file reader
async function readFile(filePath) {
    // const data = fs.readFileSync(path.join('.', filePath));  //not a good idea to read synch. as it blocks the server
    const fileHandle = await fs.open(path.join('./' + filePath), 'r');
    return fileHandle.createReadStream()
    // return data.toString();
}

// real template reader
async function readTemplate(template) {
    const data = await fs.readFile(path.join('./views', template + '.html'));
    return data.toString();
}

module.exports = {
    readFile,
    readTemplate
};