const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdetail'
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
