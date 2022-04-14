const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    estado: {
      type: String,
      required: true,
      unique:true
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de Estado de Factura ya existente. Debe seleccionar otro valor.' });
const EstadoFactura = mongoose.model("EstadoFactura", schema);
module.exports = EstadoFactura;
