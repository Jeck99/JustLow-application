const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Case = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    profision: { type: String, required: true },
    role: { type: Number, required: true },
    topics: [{ type: String, required: true }],
    area: {
        type: String,
        required: true,
        enum: ["Tel Aviv", "Hifa", "center", "south", "online"],
    },
    type: {
        type: String,
        required: true,
        enum: ["consalting", "representation", "mediation"],
    },
    near_by: { type: Boolean, required: true, default: false },
    // client_city: {type: String},
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
    involved: { type: Number, required: true, default: 0 },
    client_name: { type: String, required: true },
    legal_process: { type: Boolean, required: true, default: false },
    final_summery: { type: String, required: true },
},
    { timestamps: true }
);

module.exports = mongoose.model('cases', Case);