const { getObjectId } = require("mongo-seeding");

const grupoMinerales = [
  { nombre: "Metales ferrosos"},
  { nombre: "Metales no ferrosos y raros"},
  { nombre: "Metales preciosos"},
  { nombre: "Combustible"},
  { nombre: "Materiales de construcción"},
  { nombre: "Aguas subterráneas"},
  { nombre: "Otros no metálicos" },
];

const mapToEntities = (grupoMinerales) => {
  return grupoMinerales.map((mineral, index) => {
    return {
      nombre: mineral.nombre
    };
  });
};

module.exports = mapToEntities(grupoMinerales);
