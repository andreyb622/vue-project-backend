const express = require('express');
const router = express.Router();

const boardsController = require('../controllers/board.controller');
const auth = require('../middlwares/auth.middleware');
const validate = require('../middlwares/validation.middleware');
const createBoardSheme = require('../validation-shemes/create-board.sheme');
const updateBoardSheme = require('../validation-shemes/update-board.sheme');

router
  .get('/:id', auth, boardsController.get)
  .get('/', auth, boardsController.getAll)
  .post('/', auth, validate(createBoardSheme), boardsController.post)
  .put('/:id', auth, validate(updateBoardSheme), boardsController.put)
  .delete('/:id', auth, boardsController.delete)

module.exports = router