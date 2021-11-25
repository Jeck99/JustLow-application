const lawersRouter = require('express').Router() //import from Router from express
const caseCtrl = require('../controllers/case-ctrl') //import functions from lawer-ctrl

lawersRouter.get('/all', caseCtrl.getAllCases);                  //get all lawers
lawersRouter.post('/saveLawer', caseCtrl.saveNewCase)           //save new lawer
lawersRouter.get('/lawer/:id', caseCtrl.getCaseById)           //get lawer by id
lawersRouter.get('/lawer/searchByName/:lawerName', caseCtrl.getCasesByName)//get lawers by name
lawersRouter.delete('/lawer/:id', caseCtrl.deleteCase)       //delete a lawer by id
lawersRouter.put('/lawer/:id', caseCtrl.updateCase)         //update a lawer by id

module.exports = lawersRouter; //exporting lawerRouter module
