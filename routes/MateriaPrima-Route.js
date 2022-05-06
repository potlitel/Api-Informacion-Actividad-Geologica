const express = require("express");
const router = express.Router();
const Controller = require("../controllers/MateriaPrima-Controller");

const validationMP = require('../validations/MateriaPrimaValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')

const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", cacheMiddleware(5), Controller.findAll);

// POST
router.post("/", validate(validationMP.materiaPrima),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationMP.materiaPrima),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/materiaPrima",
};
