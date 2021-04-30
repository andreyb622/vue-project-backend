const { Board } = require('../model')

const board = (model) => ({

  async getBoard(boardId) {
    const board = await model.
      findById(boardId).
      populate({
        path: 'boardListId',
        populate: { path: 'cardId'} 
      })
    return board
  },

  async getAllBoards(userId) {
    const allBoards = await model.find({users: userId})
    return allBoards  
  },
  
  async createBoard(userId, body) {
    const board = new model(body)
    board.users.push(userId)
    newBoard = await board.save()
    return newBoard
  },

  async updateBoard(id, body) {
    const board = await model.findByIdAndUpdate(id, body, { new: true })
    return board
  },

  async deleteBoard(id) {
    await model.findByIdAndDelete(id)
  }
})

module.exports = board(Board)
