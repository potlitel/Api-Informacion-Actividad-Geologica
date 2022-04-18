const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ObjetivoGeologico-Controller");

const validationOG = require('../validations/ObjetivoGeologicoValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')
// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/", validate(validationOG.objetivoGeologico),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationOG.objetivoGeologico),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/ObjetivoGeologico",
};
