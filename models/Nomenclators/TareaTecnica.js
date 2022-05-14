const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate-v2");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    objetivo_geologico: [
      { type: Schema.Types.ObjectId, ref: "ObjetivoGeologico", required: true },
    ],
    provincia: [
      { type: Schema.Types.ObjectId, ref: "Provincia", required: true },
    ],
    municipio: [
      { type: Schema.Types.ObjectId, ref: "Municipio", required: true },
    ],
    localidad: [
      { type: Schema.Types.ObjectId, ref: "Localidad", required: true },
    ],
    grupo_mineral: [
      { type: Schema.Types.ObjectId, ref: "GrupoMineral", required: true },
    ],
    estadio: [
      { type: Schema.Types.ObjectId, ref: "Estadio", required: true },
    ],
    entidad: [
      { type: Schema.Types.ObjectId, ref: "Entidad", required: true },
    ],
    fecha_inicio: {
      type: String
    },
    fecha_fin: {
      type: String
    },
    tarea_geologico: {
      type: String
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Nombre de materia prima ya existente. Debe seleccionar otro valor.' });
const MateriaPrima = mongoose.model("MateriaPrima", schema);
module.exports = MateriaPrima;
