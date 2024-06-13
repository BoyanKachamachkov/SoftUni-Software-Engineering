const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.authMiddleware = async (req, res, next) => {
    // check token
    const token = req.cookies['auth'];

    if (!token) { //you are guest
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET);

        req.user = decodedToken;
        res.locals.isAuthenticated = true;

        next();

    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
};

exports.isAuth = async (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    next();
};