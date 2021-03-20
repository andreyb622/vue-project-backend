const { model, Schema } = require("mongoose")

const schema = new Schema({
  cardName: {
    type: String,
    default: ''
  },
  boardListId: {
    type: String,
    default: ''
  }
})

module.exports = model('Card', schema)
