const express = require("express");
const router = express.Router();
const Controller = require("../controllers/EstadoFactura-Controller");

const validationEstadoFactura = require('../validations/EstadoFacturaValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", cacheMiddleware(5), Controller.get_all);

// POST
router.post("/", validate(validationEstadoFactura.estadoFactura),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationEstadoFactura.estadoFactura),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/estadoFactura",
};
