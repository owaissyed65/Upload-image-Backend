const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({message:'Please Provide Valid Authentication Code '})
    }
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
    req.verifyToken = verifyToken;
    next()
}
module.exports = auth