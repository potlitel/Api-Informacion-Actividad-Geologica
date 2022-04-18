const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Escala-Controller");

const validationEscala = require('../validations/EscalaValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/", validate(validationEscala.escala), Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationEscala.escala), Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/escala",
};
