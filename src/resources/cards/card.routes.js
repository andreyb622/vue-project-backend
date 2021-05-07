const express = require('express');
const router = express.Router();

const cardController = require('./card.controller');

router
  // .get('/:id', auth, cardController.get)
  // .get('/', auth, cardController.getAll)
  .post('/', cardController.post)
  .put('/:id', cardController.put)
  .delete('/:id', cardController.delete)

module.exports = router