const mongoose = require('mongoose');


//creatung schema for cart
const tagSchema = new mongoose.Schema({
    tagName: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Tag', tagSchema);