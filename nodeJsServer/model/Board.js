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
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  boardListId: [{ type: Schema.Types.ObjectId, ref: 'BoardList' }]
})

const Board = model('Board', schema)

module.exports = Board
   