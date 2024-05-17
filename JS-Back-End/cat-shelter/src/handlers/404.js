

function errorHandler(req, res) {
    res.writeHead(404, [
        'Content-Type', 'text/plaint'
    ]);
    res.write('404 NOT FOUND!');
    res.end();
}

module.exports = {
    errorHandler
}