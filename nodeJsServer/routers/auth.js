const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');
const authController = require('../controllers/auth.controller');
const validate = require('../middlwares/validation.middleware');
const createUserSheme = require('../validation-shemes/create-user.sheme');

router
  .post('/login', authController.login)
  .post('/logout', authController.login)
  .post('/', validate(createUserSheme), usersController.post)

module.exports = router