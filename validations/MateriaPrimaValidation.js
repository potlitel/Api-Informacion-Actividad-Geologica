const Joi = require("joi");
const JoiOid = require('joi-oid')

exports.materiaPrima = Joi.object()
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
    clasificacion: JoiOid.objectId()
      .required()
      .messages({
      'string.base': `El campo "clasificacion" debe ser de tipo 'integer'`,
      'string.empty': `El campo "clasificacion" no puede estar vacío`,
      'any.required': `El campo "clasificacion" en un campo requerido`
      }),
    um_menas: Joi.string()
      .min(5)
      .max(10)
      .messages({
      'string.base': `El campo "um_menas" debe ser de tipo 'text'`,
      'string.min': `El campo "um_menas" debe tener un mínimo de longitud de {#limit} caracteres`,
      'string.max': `El campo "um_menas" debe tener un máximo de longitud de {#limit} caracteres`,
      }),
    um_metal: Joi.string()
      .min(5)
      .max(10)
      .messages({
      'string.base': `El campo "um_metal" debe ser de tipo 'text'`,
      'string.min': `El campo "um_metal" debe tener un mínimo de longitud de {#limit} caracteres`,
      'string.max': `El campo "um_metal" debe tener un máximo de longitud de {#limit} caracteres`
      }),
  });