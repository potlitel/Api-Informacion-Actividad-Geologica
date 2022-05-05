const { getObjectId } = require("mongo-seeding");

const provincias = [
  { nombre: "Artemisa"},
  { nombre: "Camaguey"},
  { nombre: "Ciego de Avila"},
  { nombre: "Cienfuegos"},
  { nombre: "La Habana"},
  { nombre: "Granma"},
  { nombre: "Guantánamo"},
  { nombre: "Holguin"},
  { nombre: "Isla de la Juventud"},
  { nombre: "Las Tunas"},
  { nombre: "Matanzas"},
  { nombre: "Mayabeque"},
  { nombre: "Pinar del Rio"},
  { nombre: "Sancti Spíritus"},
  { nombre: "Santiago de Cuba"},
  { nombre: "Villa Clara"}
];

const mapToEntities = (provincias) => {
  return provincias.map((provincia, index) => {
    return {
      _id : getObjectId(provincia.nombre),
      nombre: provincia.nombre
    };
  });
};

module.exports = mapToEntities(provincias);
