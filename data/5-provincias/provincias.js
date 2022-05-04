const { getObjectId } = require("mongo-seeding");

const provincias = [
  { nombre: "Pinar del Rio"},
  { nombre: "La Habana"},
  { nombre: "Mayabeque"},
  { nombre: "Artemisa"},
  { nombre: "Matanzas"},
  { nombre: "Cienfuegos"}
];

const mapToEntities = (provincias) => {
  return provincias.map((provincia, index) => {
    return {
      nombre: provincia.nombre
    };
  });
};

module.exports = mapToEntities(provincias);
