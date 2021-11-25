const lawersRouter = require('express').Router() //import from Router from express
const lawerCtrl = require('../controllers/lawer-ctrl') //import functions from lawer-ctrl

lawersRouter.get('/all', lawerCtrl.getAllLawers);                  //get all lawers
lawersRouter.post('/saveLawer', lawerCtrl.saveNewLawer)           //save new lawer
lawersRouter.get('/lawer/:id', lawerCtrl.getLawerById)           //get lawer by id
lawersRouter.get('/lawer/searchByName/:lawerName', lawerCtrl.getLawerByName)//get lawers by name
lawersRouter.delete('/lawer/:id', lawerCtrl.deleteLawer)       //delete a lawer by id
lawersRouter.put('/lawer/:id', lawerCtrl.updateLawer)         //update a lawer by id

module.exports = lawersRouter; //exporting lawerRouter module
