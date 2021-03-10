const Joi = require('joi');

const updateUserSheme = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  login: Joi.string(),

  access_token: [
    Joi.string(),
    Joi.number()
  ]
})
  .xor('password', 'access_token')

module.exports = updateUserSheme;