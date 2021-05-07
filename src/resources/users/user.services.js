const User = require('./user.model')

const users = (model) => ({
  async getUser(id) {
    return await model.findById(id)
  },

  async getAllUsers() {
    return await model.find()
  },

  async createUser(body) {
    const user = new model(body)
    newUser = await user.save()
    return newUser
  },

  async updateUser(id, body) {
    const user = await model.findByIdAndUpdate(id, body, { new: true })
    return user
  },

  async deleteUser(id) {
    await model.findByIdAndDelete(id)
  },

  async login ({ body: { login, password } }) {
    const user = await model.findByCredentials(login, password);
    const token = model.generateAuthToken(user)
    return {user, token}
  }
})

module.exports = users(User)
