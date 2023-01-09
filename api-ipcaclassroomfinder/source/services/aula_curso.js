const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aulas_cursos').where(filter).select(['idAula', 'idCurso']);
    }

    /**Selecionar todos as aulas_curso */
    const getAll = async () => {
        return app.db('aulas_cursos').select(['*']);
    };

    /**Filtragem apenas as aulas_curso por ID */
    const getAllID = async (filter) => {
        return app.db('aulas_cursos').where(filter).select(['*']);
    };

    /**Atualizar a aulas_curso selecionado */
    const update = async (idAula, aulaCurso) => {
        return app.db('aulas_cursos').where({ idAula }).update(aulaCurso, ['idAula', 'idCurso']);
    };

    return {
        findOne,
        getAll,
        getAllID,
        update,
    };
};

