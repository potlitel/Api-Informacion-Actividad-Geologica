const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    objetivo_geologico: [
      { type: Schema.Types.ObjectId, ref: "ObjetivoGeologico", required: true },
    ],
    entidad: [
      { type: Schema.Types.ObjectId, ref: "Entidad", required: true },
    ],
    fecha_inicio: {
      type: Date,
        // The dates of the first and last episodes of
        // Star Trek: The Next Generation
        min: '1987-09-28',
        max: '1994-05-23',
        required: true
    },
    fecha_fin: {
      type: Date,
        // The dates of the first and last episodes of
        // Star Trek: The Next Generation
        min: '1987-09-28',
        max: '1994-05-23',
        required: true
    },
    fecha_aprobacion: {
      type: Date,
        // The dates of the first and last episodes of
        // Star Trek: The Next Generation
        min: '1987-09-28',
        max: '1994-05-23',
        required: true
    },
    jefe_proyecto: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
    aprobado: {
      type: Boolean, 
      default: false,
      required: true,
    }
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de escala ya existente. Debe seleccionar otro valor.' });
const ProyectoGeologico = mongoose.model("ProyectoGeologico", schema);
module.exports = ProyectoGeologico;
