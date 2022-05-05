const { getObjectId } = require("mongo-seeding");

const proyectos = [
  { nombre: "Proyectos de explotaciones mineras (energéticas y no energéticas)"},
  { nombre: "Planes de restauración y estudios de impacto ambiental (E.I.A)"},
  { nombre: "Proyectos de restauración de infraestructura minera"},
  { nombre: "Programa de Reducción de Riesgos y Desastres"},
  { nombre: "Proyectos para la búsqueda y evaluación de recursos minerales "},
  { nombre: "Proyectos temático-productivos"},
  { nombre: "Proyectos metodológico-experimentales "}
];

const mapToEntities = (proyectos) => {
  return proyectos.map((proyecto, index) => {
    return {
      nombre: proyecto.nombre
    };
  });
};

module.exports = mapToEntities(proyectos);
