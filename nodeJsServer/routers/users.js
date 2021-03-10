const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');
const auth = require('../middlwares/auth.middleware');
const validate = require('../middlwares/validation.middleware');
const createUserSheme = require('../validation-shemes/create-user.sheme');
const updateUserSheme = require('../validation-shemes/update-user.sheme');


router
  .get('/:id', auth, controller.get)
  .get('/', auth, controller.getAll)
  .post('/', auth, validate(createUserSheme), controller.post)
  .put('/:id', auth, validate(updateUserSheme), controller.put)
  .delete('/:id', auth, controller.delete)

module.exports = router