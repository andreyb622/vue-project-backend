const express = require('express');
const router = express.Router();

const boardListController = require('../controllers/boardList.controller');
const auth = require('../middlwares/auth.middleware');

router
  .get('/:id', auth, boardListController.get)
  .get('/', auth, boardListController.getAll)
  .post('/', auth, boardListController.post)
  .put('/:id', auth, boardListController.put)
  .delete('/:id', auth, boardListController.delete)

module.exports = router