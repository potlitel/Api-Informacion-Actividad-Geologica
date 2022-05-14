const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    nombre: {
        first: {
        type: String,
        trim: true
        },
        last: {
        type: String,
        trim: true
        }
  },
    sexo: {
      type: String,
      required: true,
      enum : ['Masculino','Femenino']
    },
    edad: {
      type: Number,
      required: true
    },
    direccion: {
      type: String,
      required: true
    },
    provincia: [
      { type: Schema.Types.ObjectId, ref: "Provincia", required: true },
    ],
    municipio: [
      { type: Schema.Types.ObjectId, ref: "Municipio", required: true },
    ],
    ci: {
      type: Number,
      required: true
    },
    grado_cientifico: {
      type: String,
      required: true,
      enum : ['Masculino','Femenino']
    },
    anno_graduado: {
      type: Number,
      required: true
    },
    titulo_academico: {
      type: String,
      required: true,
      enum : ['Masculino','Femenino']
    },
    rol: [
      { type: Schema.Types.ObjectId, ref: "Rol", required: true },
    ],
    imagen: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de escala ya existente. Debe seleccionar otro valor.' });
const Usuario = mongoose.model("Usuario", schema);
module.exports = Usuario;
