const express = require('express');

module.exports = (app) => {
    // cria um router express
    const router = express.Router();

    // Cria um route to tipo GET para os alunos e retribui todos os alunos na base de dados
    router.get('/', (req, res, next) => {
        // Chama o metodo getAll do servico de alunos
        app.services.aluno.getAll()
            // Se tiver sucesso retorna os dados da resposta JSON
            .then((result) => res.status(200).json(result))
            // Se houver um erro passa para o proximo middleware
            .catch((err) => next(err));
    });

    // Cria um route do tipo POST para os alunos para criar um novo aluno
    router.post('/', async (req, res, next) => {
        try {
            // Chama o metodo CREATE do servico de alunos com o request do body
            const result = await app.services.aluno.create(req.body);
            // Se tiver sucesso retorna os dados da resposta JSON
            return res.status(201).json(result[0]);
        } catch (err) {
            // Se houver um erro passa para o proximo middleware
            return next(err);
        }
    });

    // Cria um route do tipo GET para o /aluno/:id que recebe os dados de um aluno em especifico
    router.get('/:id', (req, res, next) => {
        // Chama o metodo getALLID do servico dos alunos
        app.services.aluno.getAllID({ idAluno: req.params.id })
        // Se tiver sucesso retorna os dados da resposta JSON
        .then((result) => res.status(200).json(result))
        // Se houver um erro passa para o proximo middleware
        .catch((err) => next(err));
    });

    // Cria uma route do tipo DELETE para o /aluno/:id que remove os dados de um aluno em especifico
    router.delete('/:id', (req, res, next) => {
        // Chama o metodo remove do servico dos alunos com os parametros requiridos
        app.services.aluno.remove({ idAluno: req.params.id})
            // Se tiver sucesso retorna os dados da resposta JSON
          .then((result) => res.status(204).json(result[0]))
          // Se houver um erro passa para o proximo middleware
          .catch((err) => next(err));
    });
    
    // Cria uma route do tipo PUT para o /aluno/:id que atualiza os dados de um aluno em especifico
    router.put('/:id', (req, res, next) => {
        // Chama o metodo update dos servicos de alunos com os parametros requiridos
        app.services.aluno.update(req.params.id, req.body)
            // Se tiver sucesso retorna os dados da resposta JSON
          .then((result) => res.status(204).json(result[0]))
          // Se houver um erro passa para o proximo middleware
          .catch((err) => next(err));
    });

    return router;
};