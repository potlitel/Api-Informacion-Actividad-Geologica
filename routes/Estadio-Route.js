const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Estadio-Controller");

const validationEstadio = require('../validations/EstadioValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", cacheMiddleware(5), Controller.get_all);

// POST
router.post("/", validate(validationEstadio.estadio),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationEstadio.estadio),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/estadio",
};
