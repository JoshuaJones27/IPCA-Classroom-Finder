const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    router.get('/', (req, res, next) => {
        app.services.aula_curso.getAll()
            .then((result) => res.status(200).json(result))
            .catch((err) => next(err));
    });

    router.get('/:id', (req, res, next) => {
        app.services.aula_curso.getAllID({ idAula: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
    });
    
    router.put('/:id', (req, res, next) => {
        app.services.aula_curso.update(req.params.id, req.body)
          .then((result) => res.status(204).json(result[0]))
          .catch((err) => next(err));
    });

    return router;
};