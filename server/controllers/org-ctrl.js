const organizationModel = require('../models/organiztion-model');

async function getAllOrganizations(req, res) {
    await organizationModel.find((err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (results.length==0) {
           return res.json({ success: false, message: "No Organizations available" })
        }
        console.log("results:", JSON.stringify(results));
        res.status(200).json({ success: true, data: results });
    });
}

async function getOrganizationById(req, res) {
    await organizationModel.findById(req.params.id, (err, organizationItem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (!organizationItem) {
            return res.status(404).json({ success: false, message: "No Organization available" })
        }
        res.status(200).json({ success: true, data: organizationItem })
    })
}

async function getOrganizationByName(req, res) {
    let organizationName = req.params.OrganizationName;
    await organizationModel.find({ OrganizationName: { $regex: organizationName, $options: "i" } }, (err, organizationItem) => {
        if (err) {
        return res.status(400).json({ success: false, error: err })
        };
        if (!organizationItem) {
            return res.status(404).json({ success: false, message: "No Organization available" })
        }
        res.status(200).json({ success: true, data: organizationItem })
    })
}

async function saveNewOrganization(req, res) {
    organizationModel.insertMany(req.body.Organization, (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, message: req.body.organization })
    })
}

async function deleteOrganization(req, res) {
    organizationModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: doc, message: "Organization deleted successfully" })
    })
}

async function updateOrganization(req, res) {
    organizationModel.findByIdAndUpdate(req.params.id, req.body.organization, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(300).json({ success: true, data: doc, message: "Organization updated successfully" })
    })
}
module.exports = {
    getAllOrganizations,
    getOrganizationById,
    saveNewOrganization,
    getOrganizationByName,
    deleteOrganization,
    updateOrganization,
};