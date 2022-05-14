const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate-v2");
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
schema.plugin(uniqueValidator, { message: 'Nombre de entidad ya existente. Debe seleccionar otro valor.' });
const Entidad = mongoose.model("Entidad", schema);
module.exports = Entidad;
