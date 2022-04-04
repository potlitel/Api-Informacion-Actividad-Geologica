var appRoot = require('app-root-path');
//const swaggerUi = require('swagger-ui-express');
//const docs = require('../docs');
//swagger setup
const { swaggerUi, swaggerSpecs } = require('../config/swagger.config');

module.exports = function(app) {
  //app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
  app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);
};