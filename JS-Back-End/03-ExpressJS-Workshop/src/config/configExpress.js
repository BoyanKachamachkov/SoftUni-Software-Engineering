const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

function configExpress(app) {
    // резолв се базира на работната директория
    // от нея влез в сорс и публик папката
    app.use(express.static(path.resolve('src/public')));

    // вграден middleware - ако имаме в бодито на рикуеста данни някакви от клиента, вземи ги и ги парсни като обект
    app.use(express.urlencoded({ extended: false }));

    app.use(cookieParser);

    return app;
}

module.exports = configExpress;