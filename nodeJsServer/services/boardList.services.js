const { BoardList } = require('../model')
const { getAllCards } = require('./card.services')

const boardList = (model) => ({

  // async getBoardList(id) {
  //   return await model.findById(id)
  // },

  // async getAllBoardLists(boardId) {
    
  //   const allBoardLists = await model.find()
  //   return allBoardLists
  // },
  
  async createBoardList(body) {
    const boardList = new model(body)
    newBoardList = await boardList.save()
    return newBoardList
  },

  async updateBoardList(id, body) {
    const boardList = await model.findByIdAndUpdate(id, body, { new: true })
    return boardList
  },

  async deleteBoardList(id) {
    await model.findByIdAndDelete(id)
  }
})



module.exports = boardList(BoardList)
