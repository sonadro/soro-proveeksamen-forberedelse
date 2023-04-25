const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    tittel: {
        type: String,
        required: true
    },
    dato: {
        type: String,
        required: true
    },
    modell: {
        type: String,
        required: true
    },
    merke: {
        type: String,
        required: true
    },
    pris: {
        type: Number,
        required: true
    },
    artikkelnummer: {
        type: Number,
        required: true
    }
});

const productModel = mongoose.model('productModel', productSchema);

module.exports = { productSchema, productModel };