const Joi = require("joi");
const JoiOid = require('joi-oid')

exports.localidad = Joi.object()
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
      'any.required': `El campo "nombre" en un campo requerido`
      }),
    municipio: JoiOid.objectId()
      .required()
      .messages({
      'string.base': `El campo "municipio" debe ser de tipo 'integer'`,
      'string.empty': `El campo "municipio" no puede estar vacío`,
      'any.required': `El campo "municipio" en un campo requerido`
      })
  });