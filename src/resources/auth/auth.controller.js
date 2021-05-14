const boom = require('boom')
const service = require('./auth.services');

class AuthController {
  
  login = async (req, res) => {
    try {
      res.status(200).send(await service.login(req))
    } catch (err) {
      return res.status(403).send(boom.boomify(err))
    }
  }

  logout = async (req, res) => {
    try {
      res.send(await service.logout(req))
    } catch (err) {
      return res.status(403).send(boom.boomify(err))
    }
  }

  refreshToken = async (req, res) => {
    try {
      res.send(await service.refreshToken(req))
    } catch (err) {
      return res.status(403).send(boom.boomify(err))
    }
  }
}

module.exports = new AuthController;