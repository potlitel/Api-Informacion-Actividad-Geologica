const { getObjectId } = require("mongo-seeding");

const proyectos = [
  { nombre: "Proyectos de explotaciones mineras (energ�ticas y no energ�ticas)"},
  { nombre: "Planes de restauraci�n y estudios de impacto ambiental (E.I.A)"},
  { nombre: "Proyectos de restauraci�n de infraestructura minera"},
  { nombre: "Programa de Reducci�n de Riesgos y Desastres"},
  { nombre: "Proyectos para la b�squeda y evaluaci�n de recursos minerales "},
  { nombre: "Proyectos tem�tico-productivos"},
  { nombre: "Proyectos metodol�gico-experimentales "}
];

const mapToEntities = (proyectos) => {
  return proyectos.map((proyecto, index) => {
    return {
      _id : getObjectId(proyecto.nombre),
      nombre: proyecto.nombre
    };
  });
};

module.exports = mapToEntities(proyectos);
