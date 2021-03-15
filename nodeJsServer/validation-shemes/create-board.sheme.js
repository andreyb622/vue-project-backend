const Joi = require('joi');

const createBoardSheme = Joi.object({
  boardName: Joi.string()
    .alphanum()
    .min(1)
    .max(30)
    .required(),
})

module.exports = createBoardSheme