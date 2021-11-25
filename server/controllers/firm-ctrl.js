const firmModel = require('../models/firm-model');

async function getAllFirms(req, res) {
    await firmModel.find((err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (results.length==0) {
           return res.json({ success: false, message: "No Lawers available" })
        }
        console.log("results:", JSON.stringify(results));
        res.status(200).json({ success: true, data: results });
    });
}

async function getFirmById(req, res) {
    await firmModel.findById(req.params.id, (err, firmItem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (!firmItem) {
            return res.status(404).json({ success: false, message: "No Lawer available" })
        }
        res.status(200).json({ success: true, data: firmItem })
    })
}

async function getFirmsByName(req, res) {
    let firmName = req.params.LawerName;
    await firmModel.find({ LawerName: { $regex: firmName, $options: "i" } }, (err, firmItem) => {
        if (err) {
        return res.status(400).json({ success: false, error: err })
        };
        if (!firmItem) {
            return res.status(404).json({ success: false, message: "No Lawer available" })
        }
        res.status(200).json({ success: true, data: firmItem })
    })
}

async function saveNewFirm(req, res) {
    firmModel.insertMany(req.body.Lawer, (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, message: req.body.firm })
    })
}

async function deleteFirm(req, res) {
    firmModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: doc, message: "Lawer deleted successfully" })
    })
}

async function updateFirm(req, res) {
    firmModel.findByIdAndUpdate(req.params.id, req.body.firm, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(300).json({ success: true, data: doc, message: "Lawer updated successfully" })
    })
}
module.exports = {
    getAllFirms,
    getFirmById,
    saveNewFirm,
    getFirmsByName,
    deleteFirm,
    updateFirm,
};