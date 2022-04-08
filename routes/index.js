const express = require("express");
const escalas = require('../routes/Escala-Route');

const router = express.Router();

router.get("/", (req, res) => {
  /*res.json({
    message: "API - 👋🌎🌍🌏",
  });*/
    res.status(200).send("<html><div id='welcome'>Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨</div></html>");
});

router.use(escalas.path, escalas.router);

module.exports = router;