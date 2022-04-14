const express = require("express");
const escalas = require('../routes/Escala-Route');
const estadios = require('../routes/Estadio-Route');
const TipoProyectoGeologico = require('../routes/TipoProyectoGeologico-Route');
const ObjetivoGeologico = require('../routes/ObjetivoGeologico-Route');
const GrupoMinerales = require('../routes/GrupoMinerales-Route');
const MateriaPrima = require('../routes/MateriaPrima-Route');
const EstadoFactura = require('../routes/EstadoFactura-Route');

const router = express.Router();

router.get("/", (req, res) => {
  /*res.json({
    message: "API - 👋🌎🌍🌏",
  });*/
    res.status(200).send("<html><div id='welcome'>Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨</div></html>");
});

router.use(escalas.path, escalas.router);
router.use(estadios.path, estadios.router);
router.use(TipoProyectoGeologico.path, TipoProyectoGeologico.router);
router.use(ObjetivoGeologico.path, ObjetivoGeologico.router);
router.use(GrupoMinerales.path, GrupoMinerales.router);
router.use(MateriaPrima.path, MateriaPrima.router);
router.use(EstadoFactura.path, EstadoFactura.router);

module.exports = router;