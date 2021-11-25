const lawerModel = require('../models/lawer-model');

async function getAllLawers(req, res) {
    await lawerModel.find((err, results) => {
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

async function getLawerById(req, res) {
    await lawerModel.findById(req.params.id, (err, lawerItem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (!lawerItem) {
            return res.status(404).json({ success: false, message: "No Lawer available" })
        }
        res.status(200).json({ success: true, data: lawerItem })
    })
}

async function getLawerByName(req, res) {
    let lawerName = req.params.LawerName;
    await lawerModel.find({ LawerName: { $regex: lawerName, $options: "i" } }, (err, lawerItem) => {
        if (err) {
        return res.status(400).json({ success: false, error: err })
        };
        if (!lawerItem) {
            return res.status(404).json({ success: false, message: "No Lawer available" })
        }
        res.status(200).json({ success: true, data: lawerItem })
    })
}

async function saveNewLawer(req, res) {
    lawerModel.insertMany(req.body.Lawer, (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, message: req.body.lawer })
    })
}

async function deleteLawer(req, res) {
    lawerModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: doc, message: "Lawer deleted successfully" })
    })
}

async function updateLawer(req, res) {
    lawerModel.findByIdAndUpdate(req.params.id, req.body.lawer, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(300).json({ success: true, data: doc, message: "Lawer updated successfully" })
    })
}
module.exports = {
    getAllLawers,
    getLawerById,
    saveNewLawer,
    getLawerByName,
    deleteLawer,
    updateLawer,
};