const Joi = require('joi');

const signinSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(2).required(),
})

module.exports = signinSchema;