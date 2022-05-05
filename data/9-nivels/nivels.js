const { getObjectId } = require("mongo-seeding");

const niveles = [
  { numero: "1"},
  { numero: "2"},
  { numero: "3"},
  { numero: "4"},
  { numero: "5"},
  { numero: "6"}
];

const mapToEntities = (niveles) => {
  return niveles.map((nivel, index) => {
    return {
      _id : getObjectId(nivel.numero),
      numero: nivel.numero
    };
  });
};

module.exports = mapToEntities(niveles);
