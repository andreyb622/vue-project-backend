const jwt = require('jsonwebtoken');
const { secret } = require('../key');
const User = require('../model/User')

const auth = async (req, res, next) => {
    const { headers: { authorization } } = req
    try {
        const token = authorization.split(' ')[1]
        const decode = jwt.verify(token, secret)
        const user = await User.findById(decode.id)

        if(!user){
            throw new Error
        }

        req.token = token
        req.user = user
        next()
    } catch {
        res.status(401).send('not auth')
    }
}

module.exports = auth;

