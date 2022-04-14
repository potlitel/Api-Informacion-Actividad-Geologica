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
    municipio: [
      { type: Schema.Types.ObjectId, ref: "Municipio", required: true },
    ],
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de municipio ya existente. Debe seleccionar otro valor.' });
const Localidad = mongoose.model("Localidad", schema);
module.exports = Localidad;
