const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Provincia-Controller");

const validationProvincia = require('../validations/ProvinciaValidation')
const {
  validate
} = require('../middlewares/validationMiddleware')
// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/", validate(validationProvincia.provincia),Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", validate(validationProvincia.provincia),Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/provincia",
};
