const mongoose = require('mongoose');


//creatung schema for cart
const employeeSchema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: true,
        unique: false
    },
    employerID: {
        type: Number,
        required: true,
        unique: false
    },
    tagIDs: {
        type: [Number],
        required: false,
        unique: false
    }
})

module.exports = mongoose.model('Employee', employeeSchema);