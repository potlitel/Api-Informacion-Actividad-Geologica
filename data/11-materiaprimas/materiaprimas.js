const { getObjectId } = require("mongo-seeding");

const materias = [
  {
    nombre: "Cobalto",
    clasificacion: getObjectId("Metales ferrosos"),
    um_menas: "Mt",
    um_metal:"Kt"
  },
  {
    nombre: "Cromo",
    clasificacion: getObjectId("Metales ferrosos"),
    um_menas: "Mt",
    um_metal:"Mt"
  },
  {
    nombre: "Hierro",
    clasificacion: getObjectId("Metales ferrosos"),
    um_menas: "Mt",
    um_metal:"Mt"
  },
  {
    nombre: "Manganeso",
    clasificacion: getObjectId("Metales ferrosos"),
    um_menas: "Mt",
    um_metal:"Mt"
  },
  {
    nombre: "Wolframio",
    clasificacion: getObjectId("Metales ferrosos"),
    um_menas: "Mt",
    um_metal:"Kt"
  },
  {
    nombre: "Aluminio",
    clasificacion: getObjectId("Metales no ferrosos y raros"),
    um_menas: "Mt",
    um_metal:"Kt"
  },
  {
    nombre: "Cobre",
    clasificacion: getObjectId("Metales no ferrosos y raros"),
    um_menas: "Mt",
    um_metal:"Kt"
  },
  {
    nombre: "Níquel",
    clasificacion: getObjectId("Metales no ferrosos y raros"),
    um_menas: "Mt",
    um_metal:"Kt"
  },
  {
    nombre: "Molibdeno",
    clasificacion: getObjectId("Metales no ferrosos y raros"),
    um_menas: "Mt",
    um_metal:"Kt"
  },
  {
    nombre: "Plomo y Zinc",
    clasificacion: getObjectId("Metales no ferrosos y raros"),
    um_menas: "Mt",
    um_metal:"Kt"
  },
  {
    nombre: "Oro",
    clasificacion: getObjectId("Metales preciosos"),
    um_menas: "Mt",
    um_metal:"t"
  },
  {
    nombre: "Plata",
    clasificacion: getObjectId("Metales preciosos"),
    um_menas: "Mt",
    um_metal:"t"
  },
  {
    nombre: "Asfaltita",
    clasificacion: getObjectId("Combustible"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Turba",
    clasificacion: getObjectId("Combustible"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Arcilla para cerámica",
    clasificacion: getObjectId("Materiales de construcción"),
    um_menas: "Mm3",
    um_metal:""
  },
  {
    nombre: "Arena y gravas naturales",
    clasificacion: getObjectId("Materiales de construcción"),
    um_menas: "Mm3",
    um_metal:""
  },
  {
    nombre: "Materias primas para cemento",
    clasificacion: getObjectId("Materiales de construcción"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Piedra de revestimiento",
    clasificacion: getObjectId("Materiales de construcción"),
    um_menas: "Mm3",
    um_metal:""
  },
  {
    nombre: "Piedra para áridos.",
    clasificacion: getObjectId("Materiales de construcción"),
    um_menas: "Mm3",
    um_metal:""
  },
  {
    nombre: "Rocas ornamentales",
    clasificacion: getObjectId("Materiales de construcción"),
    um_menas: "Mm3",
    um_metal:""
  },
  {
    nombre: "Aguas de mesa",
    clasificacion: getObjectId("Aguas subterráneas"),
    um_menas: "m3/día ",
    um_metal:""
  },
  {
    nombre: "Aguas minero-medicinales",
    clasificacion: getObjectId("Aguas subterráneas"),
    um_menas: "m3/día ",
    um_metal:""
  },
  {
    nombre: "Aguas de abasto para diferentes usos",
    clasificacion: getObjectId("Aguas subterráneas"),
    um_menas: "m3/día ",
    um_metal:""
  },
  {
    nombre: "Arcillas refractarias",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Arena cuarzosa",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Asbesto",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Barita",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Basaltos (usos especiales)",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Bentonita",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Caolín",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Carbonato",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Cuarcitas",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Cuarzo para usos especiales ",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "t",
    um_metal:""
  },
  {
    nombre: "Dolomita",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Feldespato",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Fluorita",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "t",
    um_metal:""
  },
  {
    nombre: "Fosforita y rocas fosfóricas",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Grafito",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Granate",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Magnesita",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Micas",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "t",
    um_metal:""
  },
  {
    nombre: "Piedras preciosas",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "t",
    um_metal:""
  },
  {
    nombre: "Pirita",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Sal Gema",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  },
  {
    nombre: "Talco",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Vidrio volcánico",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Yeso",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Kt",
    um_metal:""
  },
  {
    nombre: "Zeolita",
    clasificacion: getObjectId("Otros no metálicos"),
    um_menas: "Mt",
    um_metal:""
  }
];

const mapToEntities = (materias) => {
  return materias.map((materia, index) => {
    return {
      _id : getObjectId(materia.nombre),
      nombre: materia.nombre,
      clasificacion: materia.clasificacion,
      um_menas: materia.um_menas,
      um_metal: materia.um_metal
    };
  });
};

module.exports = mapToEntities(materias);
