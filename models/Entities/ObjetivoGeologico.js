const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    tipo_objetivo: [
      { type: Schema.Types.ObjectId, ref: "TipoObjetivoGeologico", required: true },
    ],
    plan: [
      { type: Schema.Types.ObjectId, ref: "Plan", required: true },
    ],
    denominacion: {
      type: String,
      required: true
    },
    observaciones: {
      type: String,
      required: true
    },
    fecha_cierre: {
      type: Date,
        // The dates of the first and last episodes of
        // Star Trek: The Next Generation
        min: '1987-09-28',
        max: '1994-05-23',
        required: true
    },
    cerrado: {
      type: Boolean, 
      default: false,
      required: true,
    },
    causa_cierre: {
      type: String,
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Nombre de objetivo geológico ya existente. Debe seleccionar otro valor.' });
const ObjetivoGeologico = mongoose.model("ObjetivoGeologico", schema);
module.exports = ObjetivoGeologico;
