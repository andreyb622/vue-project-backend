const express = require('express');
const router = express.Router();

const authController = require('./auth.controller');


router
  .post('/login', authController.login)
  .post('/logout', authController.logout)
  .post('/refreshToken', authController.refreshToken)

module.exports = router