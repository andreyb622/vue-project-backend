const Joi = require('joi');

const createUserSheme = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  login: Joi.string(),
})
  .xor('password', 'access_token')

module.exports = createUserSheme