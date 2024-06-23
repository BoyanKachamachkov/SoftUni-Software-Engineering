const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.authMiddleware = (req, res, next) => {
    // check for token?
    const token = req.cookies['auth'];

    if (!token) {
        // guest
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, SECRET);

        req.user = decodedToken;

        // for HB global usage
        res.locals.isAuthenticated = true;
        res.locals.user = decodedToken;

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

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }

    next();
};