const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Nivel-Controller");

const validationNivel = require('../validations/NivelValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')
// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/", validate(validationNivel.nivel),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationNivel.nivel),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/nivel",
};
