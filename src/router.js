const {Router} = require('express')

const userRouter = require('./resources/users/user.routes')
const authRouter = require('./resources/auth/auth.routes')
const boardRouter = require('./resources/boards/board.routes')
const boardListRouter = require('./resources/boardlists/boardList.routes')
const cardRouter = require('./resources/cards/card.routes')
const userController = require('./resources/users/user.controller')
const auth = require('./middlwares/auth.middleware')

const validate = require('./middlwares/validation.middleware');
const createUserSheme = require('./validation-shemes/create-user.sheme');

const mainRouter = Router()

mainRouter.use('/users', auth, userRouter)
mainRouter.use('/auth', authRouter)
mainRouter.use('/boards', auth, boardRouter)
mainRouter.use('/boardlists', auth, boardListRouter)
mainRouter.use('/cards', auth, cardRouter)
mainRouter.post('/signup', validate(createUserSheme), userController.createUser)

module.exports = mainRouter 