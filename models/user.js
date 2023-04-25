// packages
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const user = mongoose.model('user', userSchema);

module.exports = { userSchema, user };