const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    anno: {
      type: Number,
      required: true,
    },
    cerrado: {
      type: Boolean, 
      default: false,
      required: true,
    },
    fecha_cierre: {
        type: Date,
        // The dates of the first and last episodes of
        // Star Trek: The Next Generation
        min: '1987-09-28',
        max: '1994-05-23',
        required: true
    },
    monto_total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator, { message: 'Valor de escala ya existente. Debe seleccionar otro valor.' });
const Plan = mongoose.model("Plan", schema);
module.exports = Plan;