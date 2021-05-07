const boom = require('boom')
const service = require('./card.services');

class CardsController {
  
  getAll = async (req, res, next) => {
    try {
      const result = await service.getAllCards(req.body.boardListId);
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  get = async (req, res, next) => {
    try {
      const result = await service.getCard(req.params.id);
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
  
  post = async (req, res, next) => {
    try {
      const result = await service.createCard(req.body)
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  put = async (req, res, next) => {
    try {
      const user = await service.updateCard(req.params.id, req.body)
      res.status(200).send(user)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  delete = async (req, res, next) => {
    try {
      await service.deleteCard(req.params.id)
      res.status(200).send('card has been deleted')
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
}

module.exports = new CardsController;