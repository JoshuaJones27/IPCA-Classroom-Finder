const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aluno').where(filter).select(['idAluno', 'curso', 'idUtilizador']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aluno').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aluno').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.curso) throw new ValidationError('O Curso é um campo obrigatorio');

        const newAluno = {...req};
        return app.db('aluno').insert(newAluno, ['curso']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aluno) => {
        return app.db('aluno').where({ id }).update(aluno, ['curso']);
    };

    /**Remover uma aula */
    const remove = async (id) => {
        return app.db('aluno').where(id).del();
    };

    return {
        findOne,
        getAll,
        getAllID,
        create,
        update,
        remove,
    };
};

