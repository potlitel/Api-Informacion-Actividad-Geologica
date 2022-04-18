const express = require("express");
const router = express.Router();
const Controller = require("../controllers/TipoProyectoGeologico-Controller");

const validationTpg = require('../validations/TipoProyectoGeologicoValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')
// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/", validate(validationTpg.tpg),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationTpg.tpg),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/tipoProyectoGeologico",
};
