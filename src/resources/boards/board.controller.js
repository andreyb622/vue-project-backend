const boom = require('boom')
const service = require('./board.services');

class BoardsController {
  
  getAll = async (req, res, next) => {
    try {
      const result = await service.getAllBoards(req.user.id);
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  get = async (req, res, next) => {
    try {
      const result = await service.getBoard(req.params.id);
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
  
  post = async (req, res, next) => {
    try {
      const result = await service.createBoard(req.user.id, req.body)
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  put = async (req, res, next) => {
    try {
      const user = await service.updateBoard(req.params.id, req.body)
      res.status(200).send(user)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  delete = async (req, res, next) => {
    try {
      await service.deleteBoard(req.params.id)
      res.status(200).send('board has been deleted')
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
}

module.exports = new BoardsController;