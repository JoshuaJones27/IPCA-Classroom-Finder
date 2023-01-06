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
    
    // TRANSPORTES
    app.route('/transporte')
    .all(app.config.passport.authenticate())
    .get(app.routes.transportes.getAll)
    .post(app.routes.transportes.create)
    .delete(app.routes.transportes.remove);

    app.route('/transporte/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.transportes.getAll)
    .post(app.routes.transportes.create)
    .put(app.routes.transportes.update)
    .delete(app.routes.transportes.remove); 

    // ENCOMENDA
    app.route('/encomenda')
    .all(app.config.passport.authenticate())
    .get(app.routes.encomendas.getAll)
    .post(app.routes.encomendas.create)
    .delete(app.routes.encomendas.remove);

    app.route('/encomenda/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.encomendas.getAll)
    .put(app.routes.encomendas.update)
    .post(app.routes.encomendas.create)
    .delete(app.routes.encomendas.remove); 

    // Compras
    app.route('/compra')
    .all(app.config.passport.authenticate())
    .get(app.routes.checkouts.getAll)
    .post(app.routes.checkouts.create)
    .delete(app.routes.checkouts.remove);

    app.route('/compra/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.checkouts.getAll)
    .post(app.routes.checkouts.create)
    .put(app.routes.checkouts.update)
    .delete(app.routes.checkouts.remove); 
  };