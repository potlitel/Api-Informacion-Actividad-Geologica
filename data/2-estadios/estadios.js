const { getObjectId } = require("mongo-seeding");

const estadios = [
  {
    id: "62742ddc7afe4426dc0d4197", 
    valor_estadio: "Reconocimiento"
  },
  {
    id: "62742de4e409b7c6e71315bc",
    valor_estadio: "Prospección"
  },
  {
    id:"62742ded03d802929c8b21cc",
    valor_estadio: "Exploración"
  }
];

const mapToEntities = (estadios) => {
  return estadios.map((estadio, index) => {
    return {
      _id : getObjectId(estadio.valor_estadio),
      valor_estadio: estadio.valor_estadio
    };
  });
};

module.exports = mapToEntities(estadios);
