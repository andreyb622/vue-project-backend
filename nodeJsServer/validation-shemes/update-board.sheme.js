const Joi = require('joi');

const updateBoardSheme = Joi.object({
  boardName: Joi.string()
    .alphanum()
    .min(1)
    .max(30)
    .required(),
})

module.exports = updateBoardSheme;