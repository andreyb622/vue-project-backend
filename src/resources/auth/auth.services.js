const Token = require('./jwtToken.model')

const auth = (model) => ({
  
  async login ({ body: { login, password } }) {
    const user = await model.findByCredentials(login, password)
    const accessToken = model.generateAuthToken(user)
    const refreshToken = model.generateAuthRefreshToken(user)
    
    const foundToken = await Token.findOne({ user: user._id })

    if (foundToken) {
      await Token.findByIdAndUpdate(foundToken._id, { token: refreshToken })
      return { accessToken, refreshToken, user }
    }

    const item = new Token({ token: refreshToken, user: user._id });
    await item.save();

    return { accessToken, refreshToken, user }
  },

  async logout({ body: { refreshToken } }) {
    const foundToken = await Token.findOne({ token: refreshToken })

    if (!foundToken) return { message: 'user is not logged in' }

    await Token.findByIdAndDelete(foundToken._id)

    return { message: 'user is logged out' }
  },

  // async signUp() {

  // },

  async refreshToken({ body: { refreshToken, userId } }) {
    if (!refreshToken) return { message: 'action prohibited' }

    const currentToken = await Token.findOne({ token: refreshToken })
    if (!currentToken) return { message: 'action prohibited' }

    const decode = model.checkRefreshToken(refreshToken)
    if(!decode) return { message: 'action prohibited' }

    const accessToken = model.generateAuthToken(userId)

    return { accessToken }
  } 
})

module.exports = auth(Token)
