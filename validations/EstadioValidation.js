const Joi = require("joi");

exports.estadio = Joi.object()
  .keys({
    valor_estadio: Joi.string()
      .min(5)
      .max(10)
      .required()
      .messages({
      'string.base': `El campo "valor_estadio" debe ser de tipo 'text'`,
      'string.empty': `El campo "valor_estadio" no puede estar vacío`,
      'string.min': `El campo "valor_estadio" debe tener un mínimo de longitud de {#limit} caracteres`,
      'string.max': `El campo "valor_estadio" debe tener un máximo de longitud de {#limit} caracteres`,
      'any.required': `El campo "valor_estadio" es un campo requerido`
    })
  });