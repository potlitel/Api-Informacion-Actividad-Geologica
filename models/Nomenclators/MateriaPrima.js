const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique:true
    },
    clasificacion: [
      { type: Schema.Types.ObjectId, ref: "GrupoMinerales", required: true },
    ],
    um_menas: {
      type: String
    },
    um_metal: {
      type: String
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Nombre de materia prima ya existente. Debe seleccionar otro valor.' });
const MateriaPrima = mongoose.model("MateriaPrima", schema);
module.exports = MateriaPrima;
