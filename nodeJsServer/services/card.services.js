const { Card } = require('../model')

const card = (model) => ({

  async getCard(id) {    
    return await model.findById(id)
  },

  async getAllCards(boardListId) {
    const allCards = await model.find()
    const cards = allCards.filter((e, i) => e.boardListId.includes(boardListId))
    return cards
  },
  
  async createCard(body) {
    const card = new model(body)
    newCard = await card.save()
    return newCard
  },

  async updateCard(id, body) {
    const card = await model.findByIdAndUpdate(id, body, { new: true })
    return card
  },

  async deleteCard(id) {
    await model.findByIdAndDelete(id)
  }
})

module.exports = card(Card)
