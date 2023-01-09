module.exports = (app) => {
    // AUTH
    app.route('/auth/signin')
      .get(app.routes.utilizadores.getAll);

    app.route('/auth/signup')
      .post(app.routes.utilizadores.signup);

    // UTILIZADOR
    app.route('/utilizador')
      .all(app.config.passport.authenticate())
      .get(app.routes.utilizadores.getAll)
      .get(app.routes.utilizadores.getAllID)
      .post(app.routes.utilizadores.create);
    
    app.route('/utilizador/:id')
      .all(app.config.passport.authenticate())
      .get(app.routes.utilizadores.findOne)
      .put(app.routes.utilizadores.update)
      .delete(app.routes.utilizadores.remove)

    // AULA
    app.route('/aula')
      .all(app.config.passport.authenticate())
      .get(app.routes.aulas.getAll)
      .post(app.routes.aulas.create)
      .delete(app.routes.aulas.remove);

    app.route('/aula/:id')
      .all(app.config.passport.authenticate())
      .get(app.routes.aulas.getAllCodPost)
      .post(app.routes.aulas.create)
      .put(app.routes.aulas.update)
      .delete(app.routes.aulas.remove);

    // ALUNO
    app.route('/aluno')
      .all(app.config.passport.authenticate())
      .get(app.routes.alunos.getAll)
      .post(app.routes.alunos.create)
      .delete(app.routes.alunos.remove);

    app.route('/aluno/:id')
      .all(app.config.passport.authenticate())
      .get(app.routes.alunos.getAllID)
      .post(app.routes.alunos.create)
      .put(app.routes.alunos.update)
      .delete(app.routes.alunos.remove);    

    // AULA_CURSO
    app.route('/aulaCurso')
      .all(app.config.passport.authenticate())
      .get(app.routes.aulas_cursos.getAll)

    app.route('/aulaCurso/:id')
      .all(app.config.passport.authenticate())
      .get(app.routes.aulas_cursos.getAll)
      .put(app.routes.aulas_cursos.update)

    // AULA_HORARIO
    app.route('/aulaHorario')
      .all(app.config.passport.authenticate())
      .get(app.routes.aulas_horarios.getAll)
      .post(app.routes.aulas_horarios.create)
      .delete(app.routes.aulas_horarios.remove);
 
    app.route('/aulaHorario/:id')
     .all(app.config.passport.authenticate())
     .get(app.routes.aulas_horarios.getAll)
     .post(app.routes.aulas_horarios.create)
     .put(app.routes.aulas_horarios.update)
     .delete(app.routes.aulas_horarios.remove);  

    // AULA_INSCRITO
    app.route('/aulaInscrito')
    .all(app.config.passport.authenticate())
    .get(app.routes.aulas_inscritos.getAll)
    .post(app.routes.aulas_inscritos.create)
    .delete(app.routes.aulas_inscritos.remove);

    app.route('/aulaInscrito/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.aulas_inscritos.getAll)
    .post(app.routes.aulas_inscritos.create)
    .put(app.routes.aulas_inscritos.update)
    .delete(app.routes.aulas_inscritos.remove);

    // AULA_SALA
    app.route('/aulaSala')
    .all(app.config.passport.authenticate())
    .get(app.routes.aulas_salas.getAll)
    .post(app.routes.aulas_salas.create)
    .delete(app.routes.aulas_salas.remove);

    app.route('/aulaSala/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.aulas_salas.getAll)
    .put(app.routes.aulas_salas.update)
    .post(app.routes.aulas_salas.create)
    .delete(app.routes.aulas_salas.remove);
    
    // CURSO
    app.route('/curso')
    .all(app.config.passport.authenticate())
    .get(app.routes.cursos.getAll)
    .post(app.routes.cursos.create)
    .delete(app.routes.cursos.remove);

    app.route('/curso/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.cursos.getAll)
    .post(app.routes.cursos.create)
    .put(app.routes.cursos.update)
    .delete(app.routes.cursos.remove); 

    // ESPECIALIDADE
    app.route('/especialidade')
    .all(app.config.passport.authenticate())
    .get(app.routes.especialidades.getAll)
    .post(app.routes.especialidades.create)
    .delete(app.routes.especialidades.remove);

    app.route('/especialidade/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.especialidades.getAll)
    .put(app.routes.especialidades.update)
    .post(app.routes.especialidades.create)
    .delete(app.routes.especialidades.remove); 

    // HORARIO
    app.route('/horario')
    .all(app.config.passport.authenticate())
    .get(app.routes.horarios.getAll)
    .post(app.routes.horarios.create)
    .delete(app.routes.horarios.remove);

    app.route('/horario/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.horarios.getAll)
    .post(app.routes.horarios.create)
    .put(app.routes.horarios.update)
    .delete(app.routes.horarios.remove); 

    // INSCRITO
    app.route('/inscrito')
    .all(app.config.passport.authenticate())
    .get(app.routes.inscritos.getAll)
    .post(app.routes.inscritos.create)
    .delete(app.routes.inscritos.remove);

    app.route('/inscrito/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.inscritos.getAll)
    .post(app.routes.inscritos.create)
    .put(app.routes.inscritos.update)
    .delete(app.routes.inscritos.remove); 

    // POLO
    app.route('/polo')
    .all(app.config.passport.authenticate())
    .get(app.routes.polos.getAll)
    .post(app.routes.polos.create)
    .delete(app.routes.polos.remove);

    app.route('/polo/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.polos.getAll)
    .post(app.routes.polos.create)
    .put(app.routes.polos.update)
    .delete(app.routes.polos.remove); 

    // PROFESSOR
    app.route('/professor')
    .all(app.config.passport.authenticate())
    .get(app.routes.professores.getAll)
    .post(app.routes.professores.create)
    .delete(app.routes.professores.remove);

    app.route('/professor/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.professores.getAll)
    .post(app.routes.professores.create)
    .put(app.routes.professores.update)
    .delete(app.routes.professores.remove); 

    // SALA
    app.route('/sala')
    .all(app.config.passport.authenticate())
    .get(app.routes.salas.getAll)
    .post(app.routes.salas.create)
    .delete(app.routes.salas.remove);

    app.route('/sala/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.salas.getAll)
    .post(app.routes.salas.create)
    .put(app.routes.salas.update)
    .delete(app.routes.salas.remove); 

    // UTILIZADOR_AULA
    app.route('/utilizadorAula')
    .all(app.config.passport.authenticate())
    .get(app.routes.utilizadores_aulas.getAll)
    .post(app.routes.utilizadores_aulas.create)
    .delete(app.routes.utilizadores_aulas.remove);

    app.route('/utilizadorAula/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.utilizadores_aulas.getAll)
    .post(app.routes.utilizadores_aulas.create)
    .put(app.routes.utilizadores_aulas.update)
    .delete(app.routes.utilizadores_aulas.remove);
  };