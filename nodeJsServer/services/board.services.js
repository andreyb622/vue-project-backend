const { Board } = require('../model')
const bcrypt = require('bcrypt')

const board = (model) => ({

  async getBoard(id) {    
    return await model.findById(id)
  },

  async getAllBoards(id) {    
    const allBoards = await model.find()
    const boards = allBoards.filter((e, i) => e.users.includes(id))
    return boards
  },
  
  async createBoard(id, body) {
    const board = new model(body)
    board.users.push(id)
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
