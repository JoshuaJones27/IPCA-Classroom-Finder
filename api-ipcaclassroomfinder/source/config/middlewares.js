const bodyParser = require('body-parser');

module.exports = (app) => {
  // Usa o body-parser middleware para analisar os bodies dos JSON requests
  app.use(bodyParser.json());
};