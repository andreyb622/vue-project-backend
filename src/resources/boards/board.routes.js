const express = require('express');
const router = express.Router();

const boardsController = require('./board.controller');
const validate = require('../../middlwares/validation.middleware');
const createBoardSheme = require('../../validation-shemes/create-board.sheme');
const updateBoardSheme = require('../../validation-shemes/update-board.sheme');

router
  .get('/:id', boardsController.get)
  .get('/', boardsController.getAll)
  .post('/', validate(createBoardSheme), boardsController.post)
  .put('/:id', validate(updateBoardSheme), boardsController.put)
  .delete('/:id', boardsController.delete)

module.exports = router