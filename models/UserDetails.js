const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const userDetail = mongoose.model('userdetail',userDetailSchema)
module.exports = userDetail;