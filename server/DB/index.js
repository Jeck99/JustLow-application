const mongoose = require('mongoose');
const DBConcoctionString = process.env.DB;
mongoose.connect(DBConcoctionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => { 
        console.error('Connection error', error.message)
    });

const db = mongoose.connection;

module.exports = db; 