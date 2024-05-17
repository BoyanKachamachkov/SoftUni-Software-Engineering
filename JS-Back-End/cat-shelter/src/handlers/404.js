

function errorHandler(req, res) {
    res.writeHead(404, [
        'Content-Type', 'text/plain'
    ]);
    res.write('<h1>404 NOT FOUND!</h1>');
    res.end();
}

module.exports = {
    errorHandler
};