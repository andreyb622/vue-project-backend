const { User } = require('../model')

const authServices = (model) => ({
  async login ({ body: { login, password } }) {
    const user = await model.findOne({login})
    if(user) {
      if (model.findByCredentials(password, user.password)) {
        const token = model.generateAuthToken(user)
        return {user, token}
      } else {
          return "неверный пароль";
      }
    } else {
        return "Такого пользователя нет";
    }
  }
})

module.exports = authServices(User)
