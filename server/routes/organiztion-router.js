const organizationsRouter = require('express').Router() //import from Router from express
const organizationCtrl = require('../controllers/org-ctrl') //import functions from organization-ctrl

organizationsRouter.get('/all', organizationCtrl.getAllOrganizations);                  //get all organizations
organizationsRouter.post('/saveOrganization', organizationCtrl.saveNewOrganization)           //save new organization
organizationsRouter.get('/organization/:id', organizationCtrl.getOrganizationById)           //get organization by id
organizationsRouter.get('/organization/searchByName/:organizationName', organizationCtrl.getOrganizationByName)//get organizations by name
organizationsRouter.delete('/organization/:id', organizationCtrl.deleteOrganization)       //delete a organization by id
organizationsRouter.put('/organization/:id', organizationCtrl.updateOrganization)         //update a organization by id

module.exports = organizationsRouter; //exporting organizationRouter module
