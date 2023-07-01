const mongoose = require('mongoose');


//creatung schema for cart
const employerSchema = new mongoose.Schema({
    employerName: {
        type: String,
        required: true,
        unique: false
    },
    employerCompany: {
        type: String,
        required: true,
        unique: false
    }
})

module.exports = mongoose.model('Employer', employerSchema);