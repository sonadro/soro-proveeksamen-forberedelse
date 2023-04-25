// packages
const mongoose = require('mongoose');

const { userModel } = require('../models/user');

// controller
module.exports.user_create = (req, res) => {
    const data = req.body;

    const document = new userModel(data.parcel);
    
    // save document
    try {
        document.save();
        res.status(200).send({
            status: 'Document has been uploaded'
        });
    } catch (err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};

module.exports.user_readOne = async (req, res) => {
    const data = req.body;
    
    const docId = data.id;

    try {
        const document = await userModel.findOne({ _id: docId });
        res.status(200).send({
            status: 'Document has been read',
            document
        });
    } catch (err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};

module.exports.user_updateOne = async (req, res) => {
    const data = req.body;

    console.log(data);

    try {
        const oldDoc = await userModel.findOne({ _id: data.id });
        const update = data.document;
        await oldDoc.updateOne(update);

        const newDoc = await userModel.findOne({ _id: data.id});
        res.status(200).send({
            status: 'Dokument has been updated',
            document: newDoc
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};

module.exports.user_deleteOne = async (req, res) => {
    const data = req.body;

    console.log(data);

    try {
        await userModel.findOneAndRemove({ _id: data.id });
        console.log('Deleted document');
        res.status(200).send({
            status: 'Document has been deleted'
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    }
};

module.exports.user_readAll = async (req, res) => {
    try {
        const allDocs = await userModel.find({ });
        let allIds = [];
        allDocs.forEach(doc => {
            allIds.push(doc._id.toString());
        });

        res.status(200).send({
            status: 'fetched all ids',
            allIds
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};