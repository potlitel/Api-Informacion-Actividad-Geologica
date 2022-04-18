const Joi = require("joi");

exports.estadoFactura = Joi.object()
  .keys({
    estado: Joi.string()
      .min(5)
      .max(10)
      .required()
      .messages({
      'string.base': `El campo "estado" debe ser de tipo 'text'`,
      'string.empty': `El campo "estado" no puede estar vacío`,
      'string.min': `El campo "estado" debe tener un mínimo de longitud de {#limit} caracteres`,
      'string.max': `El campo "estado" debe tener un máximo de longitud de {#limit} caracteres`,
      'any.required': `El campo "estado" es un campo requerido`
    })
  });