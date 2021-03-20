const { model, Schema } = require("mongoose")

const schema = new Schema({
  boardListName: {
    type: String,
    default: ''
  },
  boardId: {
    type: String,
    default: ''
  }
})

module.exports = model('BoardList', schema)
