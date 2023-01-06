const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aulas_salas').where(filter).select(['idAula', 'idSala']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aulas_salas').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aulas_salas').where(filter).select(['*']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aulaSala) => {
        return app.db('aulas_salas').where({ id }).update(aulaSala, ['idAula', 'idSala']);
    };

    return {
        findOne,
        getAll,
        getAllID,
        update,
    };
};

