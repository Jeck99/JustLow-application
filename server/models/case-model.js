const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Case = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    profision: { type: String, required: true },
    topics: [{ type: String, required: true }],
    rating: Number,
    lawyer: {
        type: mongoose.Types.ObjectId,
        ref: "lawers"
    },
    firm: {
        type: mongoose.Types.ObjectId,
        ref: "firm"
    },
    client_phone: { type: String, required: true },
    final_summery: { type: String, required: true },
},
    { timestamps: true }
);

module.exports = mongoose.model('cases', Case);