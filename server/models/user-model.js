const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cases: {
        type: mongoose.Types.ObjectId,
        ref: "cases"
    }
},
    { timestamps: true }
)
module.exports = mongoose.model('users', User);