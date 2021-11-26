const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lawer = new Schema({
    full_name: { type: String, required: true },
    email: { type: String, require },
    role: { type: Number, require },
    password: { type: String, required: true },
    experties: {
        type: String,
        required: true,
        enum: ["cevel", "family", "work", "administretion"]
    },
    phone_number: { type: Number, require },
    rating: Number,
    cases: [{
        type: mongoose.Types.ObjectId,
        ref: "cases"
    }],
    firm: {
        type: mongoose.Types.ObjectId,
        ref: "firm"
    },
    langs: [{ type: String, default: "hebrew" }],
    seniority: Number,
    gender: { type: String, enum: ["male", "female"] },
    area: {
        type: String,
        required: true,
        enum: ["Tel Aviv", "Hifa", "center", "south"],
    },
    capability: Number,
    nonWorkingPeriod: [{ type: Number }]
},
    { timestamps: true }
)
module.exports = mongoose.model('lawers', Lawer);