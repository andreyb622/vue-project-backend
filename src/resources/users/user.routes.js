const express = require('express');
const router = express.Router();

const usersController = require('./user.controller');
const validate = require('../../middlwares/validation.middleware');
const updateUserSheme = require('../../validation-shemes/update-user.sheme');
const createUserSheme = require('../../validation-shemes/create-user.sheme');


router
  .get('/:id', usersController.get)
  .get('/', usersController.getAll)
  .post('/', validate(createUserSheme), usersController.post)
  .put('/:id', validate(updateUserSheme), usersController.put)
  .delete('/:id', usersController.delete)

module.exports = router