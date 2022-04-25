const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Rol-Controller");

const validationRol = require('../validations/RolValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", cacheMiddleware(5), Controller.get_all);

// POST
router.post("/", validate(validationRol.rol),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationRol.rol),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/rol",
};
