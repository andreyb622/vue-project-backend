const { model, Schema } = require("mongoose")
const bcrypt =  require('bcrypt')

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

const User = model('User', schema);

module.exports = User
