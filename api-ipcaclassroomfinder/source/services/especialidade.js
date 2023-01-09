const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('especialidade').where(filter).select(['idEspecialidade', 'nomeEspecialidade']);
    }

    /**Selecionar todos as especialidades */
    const getAll = async () => {
        return app.db('especialidade').select(['*']);
    };

    /**Filtragem apenas as especialidades por ID */
    const getAllID = async (filter) => {
        return app.db('especialidade').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova especialidade */
    const create = async (req, res) => {
        if(!req.nomeEspecialidade) throw new ValidationError('O Nome da Especialidade é um campo obrigatorio');

        const newEspecialidade = {...req};
        return app.db('especialidade').insert(newEspecialidade, ['nomeEspecialidade']);
    };

    /**Atualizar a especialidade selecionado */
    const update = async (idEspecialidade, especialidade) => {
        return app.db('especialidade').where({ idEspecialidade }).update(especialidade, ['nomeEspecialidade']);
    };

    /**Remover uma especialidade */
    const remove = async (idEspecialidade) => {
        return app.db('especialidade').where(idEspecialidade).del();
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

