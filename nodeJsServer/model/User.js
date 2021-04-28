const { model, Schema } = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {SECRET} = require('../key')

const schema = new Schema({
  username: {
    type: String,
    default: '',
  },
  login: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: '',
    set(value) {
      return bcrypt.hashSync(value, 10)
    }
  },
  role: {
    type: String,
    default: 'user'
  }
})

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
  const token = jwt.sign({id: user.id}, SECRET);
  return token
}

const User = model('User', schema);

module.exports = User
