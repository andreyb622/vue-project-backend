const { model, Schema } = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {secret} = require('../key')

const schema = new Schema({
  username: {
    type: String,
    default: '',
  },
  email: {
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

schema.statics.findByCredentials = (password, userPassword) => {
  return bcrypt.compareSync(password, userPassword)
}

schema.statics.generateAuthToken = (user) => {
  const token = jwt.sign({id: user.id}, secret);
  return token
}

module.exports = model('User', schema)
