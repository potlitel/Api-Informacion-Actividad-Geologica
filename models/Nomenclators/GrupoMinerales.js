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
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Nombre de Grupo de Minerales ya existente. Debe seleccionar otro valor.' });
const GrupoMinerales = mongoose.model("GrupoMinerales", schema);
module.exports = GrupoMinerales;
