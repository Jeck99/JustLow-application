const lawersRouter = require('express').Router() //import from Router from express
const firmCtrl = require('../controllers/firm-ctrl') //import functions from lawer-ctrl

lawersRouter.get('/all', firmCtrl.getAllFirms);                  //get all lawers
lawersRouter.post('/saveLawer', firmCtrl.saveNewFirm)           //save new lawer
lawersRouter.get('/lawer/:id', firmCtrl.getFirmById)           //get lawer by id
lawersRouter.get('/lawer/searchByName/:lawerName', firmCtrl.getFirmsByName)//get lawers by name
lawersRouter.delete('/lawer/:id', firmCtrl.deleteFirm)       //delete a lawer by id
lawersRouter.put('/lawer/:id', firmCtrl.updateFirm)         //update a lawer by id

module.exports = lawersRouter; //exporting lawerRouter module
