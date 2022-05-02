const express = require("express");
const router = express.Router();
const Controller = require("../controllers/GrupoMinerales-Controller");

const validationgp = require('../validations/GrupoMineralesValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/", validate(validationgp.grupoMinerales),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationgp.grupoMinerales),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/grupoMinerales",
};
