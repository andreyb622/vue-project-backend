const boom = require('boom')
const authService = require('../services/auth.services');

class AuthController {
  login = async (req, res) => {
    try {
      res.send(await authService.login(req))
    } catch (err) {
      return res.status(403).send(boom.boomify(err))
    }
  }

  
}

module.exports = new AuthController;