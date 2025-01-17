const { readFile } = require("../src/util");

function staticFileHandler(req, res) {

    // we dont modify the static files, so we can stream them

    if (req.url.endsWith('.css')) {
        // handle stylesheet
        sendFile(req.url, 'text/css', res);

        return true;
    } else if (req.url.endsWith('.ico')) {
        // handle favicon
        sendFile(req.url, 'image/svg+xml', res);
        return true;
    }
    return false;
}

async function sendFile(path, contentType, res) {
    const data = await readFile(path);
    res.writeHead(200, [
        'Content-Type', contentType
    ]);
    data.pipe(res);
}

module.exports = {
    staticFileHandler
};