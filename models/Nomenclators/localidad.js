const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
const Localidad = mongoose.model("Localidad", schema);
module.exports = Localidad;
