const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    valor_escala: {
      type: String,
      required: true,
      unique:true
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de escala ya existente. Debe seleccionar otro valor.' });
const ProyectoGeologico = mongoose.model("ProyectoGeologico", schema);
module.exports = ProyectoGeologico;
