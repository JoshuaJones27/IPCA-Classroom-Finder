const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('especialidade').where(filter).select(['idEspecialidade', 'nomeEspecialidade']);
    }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('especialidade').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('especialidade').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nomeEspecialidade) throw new ValidationError('O Nome da Especialidade é um campo obrigatorio');

        const newEspecialidade = {...req};
        return app.db('especialidade').insert(newEspecialidade, ['nomeEspecialidade']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, especialidade) => {
        return app.db('especialidade').where({ id }).update(especialidade, ['nomeEspecialidade']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('especialidade').where(id).del();
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

