const express = require("express");
const router = express.Router();
const Controller = require("../controllers/MateriaPrima-Controller");

const validationMP = require('../validations/MateriaPrimaValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')
// GET ALL
router.get("/", Controller.get_all);

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
