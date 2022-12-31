const express = require('express');

module.exports = (app) => {
  app.use('/auth', app.routes.utilizadores);

  const secureRouter = express.Router();

  secureRouter.use('/utilizador', app.routes.utilizadores);
  secureRouter.use('/aula', app.routes.aulas);
  secureRouter.use('/curso', app.routes.cursos);
  secureRouter.use('/horario', app.routes.horarios);
  secureRouter.use('/inscrito', app.routes.inscritos);
  secureRouter.use('/polo', app.routes.polos);
  secureRouter.use('/professor', app.routes.professores);
  secureRouter.use('/rota', app.routes.rotas);
  secureRouter.use('/sala', app.routes.salas);
  secureRouter.use('/siga', app.routes.sigas);
  secureRouter.use('/siges', app.routes.sigess);

  app.use('/v1', secureRouter);
};
