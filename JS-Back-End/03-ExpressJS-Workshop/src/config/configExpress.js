const express = require('express');
const path = require('path');

function configExpress(app) {
    // резолв се базира на работната директория
    // от нея влез в сорс и публик папката
    app.use(express.static(path.resolve('src/public')));
    return app;
}

module.exports = configExpress;