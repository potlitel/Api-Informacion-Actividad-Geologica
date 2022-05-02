const { getObjectId } = require("mongo-seeding");

const escalas = [
  { valor_escala: "1:500"},
  { valor_escala: "1:1000"},
  { valor_escala: "1:5000"},
  { valor_escala: "1:10000"},
  { valor_escala: "1:25000"},
  { valor_escala: "1:50000"}
];

const mapToEntities = (escalas) => {
  return escalas.map((escala, index) => {
    return {
      valor_escala: escala.valor_escala
    };
  });
};

module.exports = mapToEntities(escalas);
