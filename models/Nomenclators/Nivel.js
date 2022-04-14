const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    numero: {
      type: Number,
      required: true,
      unique:true
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de nivel ya existente. Debe seleccionar otro valor.' });
const Nivel = mongoose.model("Nivel", schema);
module.exports = Nivel;
