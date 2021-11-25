const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lawer = new Schema({
    first_name: { type: String, require },
    last_name: { type: String, require },
    email: { type: String, require },
    phone_number: { type: Number, require },
    image: String,
    rating: Number,
    cases: {
        type: mongoose.Types.ObjectId,
        ref: "cases"
    },
    firm: {
        type: mongoose.Types.ObjectId,
        ref: "firm"
    }
},
    { timestamps: true }
)
module.exports = mongoose.model('lawers', Lawer);