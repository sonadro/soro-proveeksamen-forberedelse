// packages
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// models
const { user } = require('../models/user');

// create jwt
const { jwtSecret, jwtAdminSecret } = require('../config.json');
const maxAge = 60 * 60 * 24 * 3;
const createToken = (id, isAdmin) => {
    if (isAdmin) {
        return jwt.sign({ id }, jwtAdminSecret, {
            expiresIn: maxAge
        });
    } else {
        return jwt.sign({ id }, jwtSecret, {
            expiresIn: maxAge
        });
    }
}

// controller
module.exports.user_login = async (req, res) => {
    // dataen brukeren skrev (brukernavn, passord)
    const data = req.body.parcel;

    // fjern gamle cookies
    res.clearCookie('kundeJWT');
    res.clearCookie('adminJWT');

    try {
        // finn bruker med matchende brukernavn
        const dbUser = await user.findOne({ brukernavn: data.brukernavn });

        // hvis bruker skriver riktig passord
        if (dbUser.passord === data.passord) {
            if (dbUser.brukertype === 'admin') {
                console.log('admin login');
                // hvis brukeren er admin, lag en admin-token:
                const token = createToken(dbUser._id, true);

                // sett jwt cookie:
                res.cookie('adminJWT', token, {
                    sameSite: true,
                    httpOnly: true,
                    maxAge: maxAge * 1000
                });

                // send til frontend:
                res.status(200).send({
                    status: 'Logget inn som admin'
                });
            } else {
                console.log('kunde login');
                // hvis brukeren ikke er admin, lag en kunde-jwt:
                const token = createToken(dbUser._id, false);

                // sett jwt cookie:
                res.cookie('kundeJWT', token, {
                    sameSite: true,
                    httpOnly: true,
                    maxAge: maxAge * 1000
                });

                // send til frontend:
                res.status(200).send({
                    status: 'Logget inn som kunde'
                });
            };
        } else {
            throw 'Feil passord';
        }
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: 'Kunne ikke logge inn.',
            err
        });
    };
};