const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Case = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    profision: { type: String, required: true },
    topics: [{ type: String, required: true }],
    lawyer: {
        type: mongoose.Types.ObjectId,
        ref: "lawers"
    },
    firm: {
        type: mongoose.Types.ObjectId,
        ref: "firm"
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('case', Case);