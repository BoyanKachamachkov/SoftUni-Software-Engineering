const middlewareChain = require('./middlewareDesignPattern');

middlewareChain.use((req, res, next) => {
    req.user = 'Pesho';
    console.log('first middleware');
    next();
});
middlewareChain.use((req, res, next) => {
    req.age = 20;
    console.log('second middleware');
    next();
});
middlewareChain.use((req, res, next) => {
    req.isAuthenticated = true;
    console.log('third middleware');
    next();
});

middlewareChain.exectute({}, {}, (req, res) => {
    console.log('Middleware chain finished.');
    console.log(req);
});
