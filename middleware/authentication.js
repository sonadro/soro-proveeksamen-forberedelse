// packages
const jwt = require('jsonwebtoken');

// imports
const { user } = require('../models/user');
const { jwtSecret, jwtAdminSecret } = require('../config.json');

// administrator auth
const adminAuth = (req, res, next) => {
    const token = req.cookies.adminJWT;

    // check if token exists & is verified
    if (token) {
        jwt.verify(token, jwtAdminSecret, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            };
        });
    } else {
        res.redirect('/login');
    }
};

// export functions
module.exports = { adminAuth };