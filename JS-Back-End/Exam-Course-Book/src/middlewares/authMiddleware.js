const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) { //guest
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET);

        req.user = decodedToken; //req.user.username will hold usr etc.
        res.locals.isAuthenticated = true; //handlebars global use
        // res.locals.user = decodedToken; needed if we needed to present the username in the nav for example

        next();

    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/login');
    }

};

exports.isAuth = (req, res, next) => {
    // if auth MW did not put req.user to you, you're GUEST!
    if (!req.user) {
        return res.redirect('/login');
    }

    next();
};

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }

    next();
};