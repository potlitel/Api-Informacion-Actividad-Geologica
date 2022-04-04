const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    valor_escala: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
const Escala = mongoose.model("Escala", schema);
module.exports = Escala;
