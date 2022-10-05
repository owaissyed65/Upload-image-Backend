const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
});
const User = mongoose.model('useri', userSchema);
module.exports = User
