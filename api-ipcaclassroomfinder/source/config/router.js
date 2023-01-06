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
  secureRouter.use('/aluno', app.routes.alunos);
  secureRouter.use('/aulaCurso', app.routes.aulas_cursos);
  secureRouter.use('/aulaHorario', app.routes.aulas_horarios);
  secureRouter.use('/aulaInscrito', app.routes.aulas_inscritos);
  secureRouter.use('/aulaSala', app.routes.aulas_salas);
  secureRouter.use('/utilizadorAula', app.routes.utilizadores_aulas);
  secureRouter.use('/especialidade', app.routes.especialidades);

  app.use('/v1', secureRouter);
};
