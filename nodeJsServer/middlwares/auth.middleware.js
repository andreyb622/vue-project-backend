const jwt = require('jsonwebtoken');
const { secret } = require('../key');
const User = require('../model/User')

const auth = async (req, res, next) => {
    const { headers: { authorization } } = req
    try {
        if(authorization) {
            const token = authorization.split(' ')[1]
            const decode = jwt.verify(token, secret)
            const user = await User.findById(decode.id)
    
            req.token = token 
            req.user = user 
            return next()
        }
    } catch {
        res.status(401).send('not auth')
    }
}

module.exports = auth;

