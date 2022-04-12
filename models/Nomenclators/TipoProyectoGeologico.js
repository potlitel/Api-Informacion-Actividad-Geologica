const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    valor_tipo_proyecto: {
      type: String,
      required: true,
      unique:true
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de proyecto geológico ya existente. Debe seleccionar otro valor.' });
const TipoProyectoGeologico = mongoose.model("TipoProyectoGeologico", schema);
module.exports = TipoProyectoGeologico;
