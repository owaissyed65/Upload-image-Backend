const router = require('express').Router()
const User = require('../models/User')
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')
const auth = require('../middleware/auth')
const userDetail = require('../models/UserDetails')


router.post('/upload', upload.single('image'), auth, async (req, res) => {
    let userExist = await userDetail.findOne({ userId: req.verifyToken })
    if (!userExist) {
        return res.status(404).json({ message: "User Doesn't Exist" })
    }
    const result = await cloudinary.uploader.upload(req.file.path)
    const user = await User.create({
        userId: req.verifyToken._id,
        avatar: result.secure_url,
        cloudinary_id: result.public_id
    })
    await user.save();
    res.send(user)
})
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        let user = await userDetail.findOne({ userId: req.verifyToken })
        if (!user) {
            res.status(404).json({ message: "User Doesn't Exist" })
        }
        await cloudinary.uploader.destroy(req.params.id)
        const del = await User.findOneAndDelete({ cloudinary_id: req.params.id })
        res.status(202).send(del);
    } catch (error) {

    }
})

module.exports = router