const boom = require('boom')
const service = require('./user.services');

class UsersController {
  getUser = async (req, res, next) => {
    try {
      const result = await service.getUser(req.params.id)
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
  getAllUser = async (req, res, next) => {
    try {
      const result = await service.getAllUsers();
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
  
  createUser = async (req, res, next) => {
    try {
      const result = await service.createUser(req.body)
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  updateUser = async (req, res, next) => {
    try {
      const user = await service.updateUser(req.params.id, req.body)
      res.status(200).send(user)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  deleteUser = async (req, res, next) => {
    try {
      await service.deleteUser(req.params.id)
      res.status(200).send('user has been deleted')
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
}

module.exports = new UsersController;