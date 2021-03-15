const { model, Schema } = require("mongoose")

const schema = new Schema({
  boardName: {
    type: String,
    default: ''
  },
  column: {
    type: String,
    default: ''
  },
  users: {
    type: Array,
    default: []
  }
})

module.exports = model('Board', schema)
