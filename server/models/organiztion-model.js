const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Oragniztion = new Schema({
    org_name: { type: String, require },
    email: { type: String, require },
    phone_number: { type: Number, require },
    image: String,
    rating: Number
},
    { timestamps: true }
)
module.exports = mongoose.model('oragniztions', Oragniztion);