const express = require('express');
const router = express.Router();

const boardListController = require('./boardList.controller');

router
  // .get('/:id', auth, boardListController.get)
  // .get('/', auth, boardListController.getAll)
  .post('/',  boardListController.post)
  .put('/:id',  boardListController.put)
  .delete('/:id', boardListController.delete)

module.exports = router