const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Localidad-Controller");

const validationLocalidad = require('../validations/LocalidadValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", cacheMiddleware(5), Controller.get_all);

// POST
router.post("/", validate(validationLocalidad.localidad),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationLocalidad.localidad),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/localidad",
};
