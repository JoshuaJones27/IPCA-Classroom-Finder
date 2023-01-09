const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('utilizador_aulas').where(filter).select(['idUtilizador', 'idAula']);
    }

    /**Selecionar todos os utilizador_aula */
    const getAll = async () => {
        return app.db('utilizador_aulas').select(['*']);
    };

    /**Filtragem apenas os utilizador_aula por ID */
    const getAllID = async (filter) => {
        return app.db('utilizador_aulas').where(filter).select(['*']);
    };


    /**Atualizar o utilizador_aula selecionado */
    const update = async (idUtilizador, utilizadorAula) => {
        return app.db('utilizador_aulas').where({ idUtilizador }).update(utilizadorAula, ['idUtilizador', 'idAula']);
    };

    return {
        findOne,
        getAll,
        getAllID,
        update,
    };
};

