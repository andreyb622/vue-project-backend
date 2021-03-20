const express = require('express');
const router = express.Router();

const cardController = require('../controllers/card.controller');
const auth = require('../middlwares/auth.middleware');

router
  .get('/:id', auth, cardController.get)
  .get('/', auth, cardController.getAll)
  .post('/', auth, cardController.post)
  .put('/:id', auth, cardController.put)
  .delete('/:id', auth, cardController.delete)

module.exports = router