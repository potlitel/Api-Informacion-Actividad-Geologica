const Joi = require("joi");

exports.nivel = Joi.object()
  .keys({
    numero: Joi.number()
      .min(5)
      .max(10)
      .required()
      .messages({
      'string.base': `El campo "numero" debe ser de tipo 'text'`,
      'string.empty': `El campo "numero" no puede estar vacío`,
      'string.min': `El campo "numero" debe tener un mínimo de longitud de {#limit} caracteres`,
      'string.max': `El campo "numero" debe tener un máximo de longitud de {#limit} caracteres`,
      'any.required': `El campo "numero" es un campo requerido`
    })
  });