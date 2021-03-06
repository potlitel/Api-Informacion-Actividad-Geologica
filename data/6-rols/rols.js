const { getObjectId } = require("mongo-seeding");

const roles = [
  { nombre: "Usuario"},
  { nombre: "Administrador"},
  { nombre: "Directivos del IGP"},
  { nombre: "Facturador"},
  { nombre: "Jefe de Proyecto"}
];

const mapToEntities = (roles) => {
  return roles.map((rol, index) => {
    return {
      _id : getObjectId(rol.nombre),
      nombre: rol.nombre
    };
  });
};

module.exports = mapToEntities(roles);
