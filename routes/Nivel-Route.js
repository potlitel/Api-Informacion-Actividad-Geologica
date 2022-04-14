const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Nivel-Controller");

// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/", Controller.create);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/nivel",
};
