const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Case = new Schema({
    title: { type: String, required: false},
    description: { type: String, required: false},
    profision: { type: String, required: false},
    role: { type: Number, required: false},
    topics: [{ type: String, required: false}],
    area: {
        type: String,
        required: true,
        // enum: ["Tel Aviv", "Hifa", "center", "south", "online"],
    },
    type: {
        type: String,
        required: true,
        // enum: ["consalting", "representation", "mediation"],
    },
    near_by: { type: Boolean, required: true, default: false },
    rating: Number,
    lawyer: {
        type: mongoose.Types.ObjectId,
        ref: "lawers"
    },
    firm: {
        type: mongoose.Types.ObjectId,
        ref: "firm"
    },
    client_phone: { type: String, required: false},
    involved: { type: Number, required: true, default: 0 },
    client_name: { type: String, required: false},
    legal_process: { type: Boolean, required: true, default: false },
    final_summery: { type: String, required: false},
},
    { timestamps: true }
);

module.exports = mongoose.model('cases', Case);