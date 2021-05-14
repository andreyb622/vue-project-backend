const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_SECRET_REFRESH } = require('../../config')
const User = require('../users/user.model')
const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require("mongoose");

const schema = new Schema({
  token: {
    type: String,
    default: "",
  },
  user: {
    type: ObjectId,
    ref: "User",
  }
});

schema.statics.findByCredentials = async (login, password) => {
  
  const user = await User.findOne({login})
  if (!user) {
    throw new Error('Unable user');
  }
  
  const isMatch = bcrypt.compareSync(password, user.password)
  if (!isMatch) {
    throw new Error('Unable to login');
  }
  
  return user
}

schema.statics.generateAuthToken = (user) => {
  const token = jwt.sign({id: user.id}, JWT_SECRET, { expiresIn: '1day' });
  return token
}

schema.statics.generateAuthRefreshToken = (user) => {
  const token = jwt.sign({id: user.id}, JWT_SECRET_REFRESH, { expiresIn: '10day' });
  return token
}

schema.statics.checkRefreshToken = (refreshToken) => {
  const decode = jwt.verify(refreshToken, JWT_SECRET_REFRESH)
  return decode
}

const Token = model("Token", schema);

module.exports = Token
