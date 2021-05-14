const express = require('express');
const router = express.Router();

const usersController = require('./user.controller');
const validate = require('../../middlwares/validation.middleware');
const updateUserSheme = require('../../validation-shemes/update-user.sheme');


router
  .get('/:id', usersController.getUser)
  .get('/', usersController.getAllUser)
  .put('/:id', validate(updateUserSheme), usersController.updateUser)
  .delete('/:id', usersController.deleteUser)

module.exports = router