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

const Card = model('Card', schema)

module.exports = Card
