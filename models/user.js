// packages
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    idBruker: {
        type: Number,
        required: true
    },
    brukernavn: {
        type: Number,
        required: true
    },
    brukerType: {
        type: String,
        required: true
    },
    passord: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('userModel', userSchema);

module.exports = { userSchema, userModel };