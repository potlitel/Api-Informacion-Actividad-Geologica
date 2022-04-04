const express = require('express');
const escalas = require('../routes/Escala-Route');
module.exports = function (app) {
  app.use(express.json({ limit: "50mb" }));
  app.use(escalas.path, escalas.router);
  
  // Root route of express app
  app.get("/", (req, res) => {
    res.status(200).send("<html><div id='welcome'>Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨</div></html>");
  });

  app.get("/welcome", (req, res) => {
    res.status(200).send("<html><div id='welcome'>Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨</div></html>");
  });
}