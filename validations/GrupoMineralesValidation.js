const Joi = require("joi");

exports.grupoMinerales = Joi.object()
  .keys({
    nombre: Joi.string()
      .min(5)
      .max(10)
      .required()
      .messages({
      'string.base': `El campo "nombre" debe ser de tipo 'text'`,
      'string.empty': `El campo "nombre" no puede estar vacío`,
      'string.min': `El campo "nombre" debe tener un mínimo de longitud de {#limit} caracteres`,
      'string.max': `El campo "nombre" debe tener un máximo de longitud de {#limit} caracteres`,
      'any.required': `El campo "nombre" es un campo requerido`
    })
  });