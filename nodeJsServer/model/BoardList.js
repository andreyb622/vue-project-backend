const { model, Schema } = require("mongoose")

const schema = new Schema({
  boardListName: {
    type: String,
    default: ''
  },
  boardId: {
    type: {type: Schema.Types.ObjectId, ref: 'Board'}
  },
  cardId: [{type: Schema.Types.ObjectId, ref: 'Card'}]
})

const BoardList = model('BoardList', schema)

module.exports = BoardList
