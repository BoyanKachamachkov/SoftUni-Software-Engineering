const { readFile } = require("../src/util");

function staticFileHandler(req, res) {

    if (req.url.endsWith('.css')) {
        // handle stylesheet
        const data = readFile(req.url);
        res.writeHead(200, [
            'Content-Type', 'text/css'
        ]);
        res.write(data);
        res.end();

        return true;
    }
    return false;
}

module.exports = {
    staticFileHandler
};