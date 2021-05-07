const boom = require('boom')
const service = require('./boardList.services');

class BoardListController {
  
  getAll = async (req, res, next) => {
    try {
      const result = await service.getAllBoardLists(req.params.id);
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  get = async (req, res, next) => {
    try {
      const result = await service.getBoardList(req.params.id);
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
  
  post = async (req, res, next) => {
    try {
      const result = await service.createBoardList(req.body)
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  put = async (req, res, next) => {
    try {
      const user = await service.updateBoardList(req.params.id, req.body)
      res.status(200).send(user)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  delete = async (req, res, next) => {
    try {
      await service.deleteBoardList(req.params.id)
      res.status(200).send('boardList has been deleted')
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
}

module.exports = new BoardListController;