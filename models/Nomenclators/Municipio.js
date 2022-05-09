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
    provincia: [
      { type: Schema.Types.ObjectId, ref: "Provincia", required: true },
    ],
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de municipio ya existente. Debe seleccionar otro valor.' });
const Municipio = mongoose.model("Municipio", schema);
module.exports = Municipio;
