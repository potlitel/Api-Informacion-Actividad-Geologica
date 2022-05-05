const { getObjectId } = require("mongo-seeding");

const objetivos = [
  { nombre: "Objetivos de búsqueda y evaluación de recursos minerales"},
  { nombre: "Objetivos temático-productivos y metodológicos experimentales"}
];

const mapToEntities = (objetivos) => {
  return objetivos.map((objetivo, index) => {
    return {
      nombre: objetivo.nombre
    };
  });
};

module.exports = mapToEntities(objetivos);
