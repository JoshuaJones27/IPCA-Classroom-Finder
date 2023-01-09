const express = require('express');

module.exports = (app) => {
  // Cria a rota para o caminho da autenticacao, usando a route dos utilizadores
  app.use('/auth', app.routes.utilizadores);

  // Cria uma rota express para as rotas seguras
  const secureRouter = express.Router();

  // Cria rotas para cada um dos caminhos em baixo com a rota correspondente
  secureRouter.use('/utilizador', app.routes.utilizadores);
  secureRouter.use('/aula', app.routes.aulas);
  secureRouter.use('/curso', app.routes.cursos);
  secureRouter.use('/horario', app.routes.horarios);
  secureRouter.use('/inscrito', app.routes.inscritos);
  secureRouter.use('/polo', app.routes.polos);
  secureRouter.use('/professor', app.routes.professores);
  secureRouter.use('/sala', app.routes.salas);
  secureRouter.use('/aluno', app.routes.alunos);
  secureRouter.use('/aulaCurso', app.routes.aulas_cursos);
  secureRouter.use('/aulaHorario', app.routes.aulas_horarios);
  secureRouter.use('/aulaInscrito', app.routes.aulas_inscritos);
  secureRouter.use('/aulaSala', app.routes.aulas_salas);
  secureRouter.use('/utilizadorAula', app.routes.utilizadores_aulas);
  secureRouter.use('/especialidade', app.routes.especialidades);

  // Cria a rota para o caminho /v1 que usa a rota segura
  app.use('/v1', secureRouter);
};
