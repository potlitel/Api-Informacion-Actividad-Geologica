const { getObjectId } = require("mongo-seeding");

const estadios = [
  { valor_estadio: "Reconocimiento"},
  { valor_estadio: "Prospección"},
  { valor_estadio: "Exploración"}
];

const mapToEntities = (estadios) => {
  return estadios.map((estadio, index) => {
    return {
      valor_estadio: estadio.valor_estadio
    };
  });
};

module.exports = mapToEntities(estadios);
