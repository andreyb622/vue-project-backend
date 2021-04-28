const { User } = require('../model')

const authServices = (model) => ({
  
  async login ({ body: { login, password } }) {
    const user = await User.findByCredentials(login, password);
    const token = model.generateAuthToken(user)
    return {user, token}
  }
})

module.exports = authServices(User)
