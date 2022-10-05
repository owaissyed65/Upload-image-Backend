const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const UserDetail = require('../models/UserDetails')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/User');
// create Account
router.post('/create', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5, max: 50 }),
], async (req, res) => {
    try {
        // validation code
        const { name, email, password } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        };
        const userExist = await UserDetail.findOne({ email: email })
        if (userExist) {
            return res.status(406).json({ message: 'User Already Exist' })
        }
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password, salt)
        const userCreate = await UserDetail.create({
            name: name,
            email: email,
            password: hash
        })
        await userCreate.save();
        const jwToken = jwt.sign({ _id: userCreate._id }, process.env.SECRET_KEY);
        res.status(201).json({ Authorization: jwToken })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }
})
//get account from jwt
router.get('/getaccount', auth, async (req, res) => {
    try {
        const userDetail = await UserDetail.findById({ _id: req.verifyToken._id })
        const image = await User.find({ userId: userDetail._id })
        res.status(202).json({userDetail,image})
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }
})
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5 })
], async (req, res) => {
    try {
        // validation code
        const { name, email, password } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const userVerfiy = await UserDetail.findOne({ email: req.body.email })
        const verifyPassword = bcrypt.compareSync(req.body.password, userVerfiy.password)

        if (!userVerfiy || !verifyPassword) {
            return res.status(404).json({ message: 'User Not Found' })
        }
        else {
            const jwToken = jwt.sign({ _id: userVerfiy._id }, process.env.SECRET_KEY);
            return res.json({ Authorization: jwToken })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }
})
module.exports = router