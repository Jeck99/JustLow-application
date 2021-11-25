const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Oragniztion = new Schema({
    org_name: { type: String, require },
    email: { type: String, require },
    phone_number: { type: Number, require },
    image: String,
    rating: Number,
    cases: [{
        type: mongoose.Types.ObjectId,
        ref: "cases"
    }]
},
    { timestamps: true }
)
module.exports = mongoose.model('oragniztions', Oragniztion);