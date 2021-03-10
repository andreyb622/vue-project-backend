const boom = require('boom')
const service = require('../services/users.services');

class UsersController {
  get = async (req, res, next) => {
    try {
      const result = await service.getUser(req.params.id)
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
  getAll = async (req, res, next) => {
    try {
      const result = await service.getAllUsers();
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }
  
  post = async (req, res, next) => {
    try {
      const result = await service.createUser(req)
      res.status(200).send(result)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  put = async (req, res, next) => {
    try {
      const user = await service.updateUser(req)
      res.status(200).send(user)
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  delete = async (req, res, next) => {
    try {
      const result = await service.deleteUser(req.params.id)
      res.status(200).send('user has been deleted')
    } catch (err) {
      return res.status(400).send(boom.boomify(err))
    }
  }

  login = async (req, res) => {
    try {
      res.send(await service.login(req))
    } catch (err) {
      return res.status(403).send(boom.boomify(err))
    }
  }
}

module.exports = new UsersController;