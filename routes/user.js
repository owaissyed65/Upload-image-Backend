const router = require('express').Router()
const User = require('../models/User')
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')


router.post('/upload', upload.single('image'), async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path)
    const user = await User.create({
        name: req.body.name,
        avatar: result.secure_url,
        cloudinary_id: result.public_id
    })
    await user.save();
    res.send(user)
})
router.get('/get', async (req, res) => {
    const {name} = req.body;
    const user = await User.findOne({name})
    res.send(user)
})

module.exports = router