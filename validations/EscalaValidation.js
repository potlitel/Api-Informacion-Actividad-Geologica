const Joi = require("joi");

exports.escala = Joi.object()
  .keys({
    valor_escala: Joi.string()
      .min(5)
      .max(10)
      .required()
      .messages({
      'string.base': `El campo "valor_escala" debe ser de tipo 'text'`,
      'string.empty': `El campo "valor_escala" no puede estar vacío`,
      'string.min': `El campo "valor_escala" debe tener un mínimo de longitud de {#limit} caracteres`,
      'string.max': `El campo "valor_escala" debe tener un máximo de longitud de {#limit} caracteres`,
      'any.required': `El campo "valor_escala" en un campo requerido`
    })
  });