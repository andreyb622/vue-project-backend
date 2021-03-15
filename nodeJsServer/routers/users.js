const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');
const auth = require('../middlwares/auth.middleware');
const validate = require('../middlwares/validation.middleware');
const updateUserSheme = require('../validation-shemes/update-user.sheme');


router
  .get('/:id', auth, usersController.get)
  .get('/', auth, usersController.getAll)
  .put('/:id', auth, validate(updateUserSheme), usersController.put)
  .delete('/:id', auth, usersController.delete)

module.exports = router