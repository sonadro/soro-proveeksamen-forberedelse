// imports
const mongoose = require('mongoose');
const { product } = require('../models/product');

// controller
module.exports.lag_produkt = (req, res) => {
    const data = req.body.parcel;

    const document = new product(data);

    // lagre produkt
    try {
        document.save();
        res.status(200).send({
            status: 'Produktet er lagret!'
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: 'Produktet ble ikke lagret :(',
            err
        });
    };
}