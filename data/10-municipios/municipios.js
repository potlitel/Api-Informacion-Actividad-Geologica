const { getObjectId } = require("mongo-seeding");

const municipios = [
  {
    nombre: "Alquizar",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Artemisa",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Bauta",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Caimito",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Guanajay",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "San Antonio de los Baños",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Mariel",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Güira de Melena",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Bahía Honda",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Candelaria",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "San Cristóbal",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Céspedes",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Esmeralda",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Florida",
    provincia: getObjectId("Camaguey")
  }
];

const mapToEntities = (municipios) => {
  return municipios.map((municipio, index) => {
    return {
      nombre: municipio.nombre,
      provincia: municipio.provincia
    };
  });
};

module.exports = mapToEntities(municipios);
