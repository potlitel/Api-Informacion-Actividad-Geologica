const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Municipio-Controller");

const validationMunicipio = require('../validations/MunicipioValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", cacheMiddleware(5), Controller.get_all);

// POST
router.post("/", validate(validationMunicipio.municipio),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationMunicipio.municipio),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/municipio",
};
