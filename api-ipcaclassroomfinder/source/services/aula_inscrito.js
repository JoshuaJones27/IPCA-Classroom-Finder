const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aulas_inscritos').where(filter).select(['idAula', 'idInscritos']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aulas_inscritos').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aulas_inscritos').where(filter).select(['*']);
    };

    /**Atualizar a aula selecionado */
    const update = async (idAula, aulaInscrito) => {
        return app.db('aulas_inscritos').where({ idAula }).update(aulaInscrito, ['idAula', 'idInscritos']);
    };

    return {
        findOne,
        getAll,
        getAllID,
        update,
    };
};

