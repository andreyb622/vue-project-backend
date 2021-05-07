const {Router} = require('express')

const userRouter = require('./resources/users/user.routes')
const boardRouter = require('./resources/boards/board.routes')
const boardListRouter = require('./resources/boardlists/boardList.routes')
const cardRouter = require('./resources/cards/card.routes')
const userController = require('./resources/users/user.controller')
const auth = require('./middlwares/auth.middleware')

const mainRouter = Router()

mainRouter.use('/users', auth, userRouter)
mainRouter.use('/boards', auth, boardRouter)
mainRouter.use('/boardlists', auth, boardListRouter)
mainRouter.use('/cards', auth, cardRouter)
mainRouter.post('/login', userController.login)

module.exports = mainRouter 