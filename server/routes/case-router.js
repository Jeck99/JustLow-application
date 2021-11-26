const casesRouter = require('express').Router() //import from Router from express
const caseCtrl = require('../controllers/case-ctrl') //import functions from case-ctrl

casesRouter.get('/all', caseCtrl.getAllCases);                  //get all cases
casesRouter.post('/saveCase', caseCtrl.saveNewCase)           //save new case
casesRouter.get('/case/:id', caseCtrl.getCaseById)           //get case by id
casesRouter.get('/case/searchByName/:caseName', caseCtrl.getCasesByName)//get cases by name
casesRouter.delete('/case/:id', caseCtrl.deleteCase)       //delete a case by id
casesRouter.put('/case/:id', caseCtrl.updateCase)         //update a case by id

module.exports = casesRouter; //exporting caseRouter module
