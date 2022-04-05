const express = require("express");
const escalas = require('../routes/Escala-Route');

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use(escalas.path, escalas.router);

module.exports = router;