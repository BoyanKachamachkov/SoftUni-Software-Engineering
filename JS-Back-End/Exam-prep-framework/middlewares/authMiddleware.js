const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');


exports.authMiddleware = (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, SECRET);

        req.user = decodedToken;
        res.locals.isAuthenticated = true; //global variable for express
        //  for the specific life of the req of the given user
        res.locals.user = decodedToken; //for handlebars global usage

        next();
    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }

    next();
};