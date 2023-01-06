const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aulas_horarios').where(filter).select(['idAula', 'idHorario']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aulas_horarios').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aulas_horarios').where(filter).select(['*']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aulaHorario) => {
        return app.db('aulas_horarios').where({ id }).update(aulaHorario, ['idAula', 'idHorario']);
    };

    return {
        findOne,
        getAll,
        getAllID,
        update,
    };
};

