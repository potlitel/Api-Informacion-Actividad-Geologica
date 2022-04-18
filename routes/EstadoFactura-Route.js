const express = require("express");
const router = express.Router();
const Controller = require("../controllers/EstadoFactura-Controller");

const validationEstadoFactura = require('../validations/EstadoFacturaValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')
// GET ALL
router.get("/", Controller.get_all);

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
