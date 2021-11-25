const caseModel = require('../models/case-model');

async function getAllCases(req, res) {
    await caseModel.find((err, results) => {
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

async function getCaseById(req, res) {
    await caseModel.findById(req.params.id, (err, caseItem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (!caseItem) {
            return res.status(404).json({ success: false, message: "No Lawer available" })
        }
        res.status(200).json({ success: true, data: caseItem })
    })
}

async function getCasesByName(req, res) {
    let caseName = req.params.LawerName;
    await caseModel.find({ LawerName: { $regex: caseName, $options: "i" } }, (err, caseItem) => {
        if (err) {
        return res.status(400).json({ success: false, error: err })
        };
        if (!caseItem) {
            return res.status(404).json({ success: false, message: "No Lawer available" })
        }
        res.status(200).json({ success: true, data: caseItem })
    })
}

async function saveNewCase(req, res) {
    caseModel.insertMany(req.body.Lawer, (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, message: req.body.case })
    })
}

async function deleteCase(req, res) {
    caseModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: doc, message: "Lawer deleted successfully" })
    })
}

async function updateCase(req, res) {
    caseModel.findByIdAndUpdate(req.params.id, req.body.case, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(300).json({ success: true, data: doc, message: "Lawer updated successfully" })
    })
}
module.exports = {
    getAllCases,
    getCaseById,
    saveNewCase,
    getCasesByName,
    deleteCase,
    updateCase,
};