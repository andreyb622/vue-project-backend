const { Board } = require('../model')
const { getAllBoardLists } = require('./boardList.services')

const board = (model) => ({

  async getBoard(boardId) {
    const board = await model.findById(boardId)
    const boardLists = await getAllBoardLists(boardId)
    return { ...board._doc, boardLists: boardLists }
  },

  async getAllBoards(userId) {
    const allBoards = await model.find()
    const boards = allBoards.filter(e => e.users.includes(userId))
    return boards
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
