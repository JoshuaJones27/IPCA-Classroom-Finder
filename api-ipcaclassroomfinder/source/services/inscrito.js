const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('item').where(filter).select(['idInscritos', 'numero']);
    }

    /**Selecionar todos os inscritos */
    const getAll = async () => {
        return app.db('inscrito').select(['*']);
    };

    /**Filtragem apenas os inscritos por ID */
    const getAllID = async (filter) => {
        return app.db('inscrito').where(filter).select(['*']);
    };

    /**Criação do registo de um novo inscrito */
    const create = async (req, res) => {
        if(!req.numero) throw new ValidationError('O Numero é um campo obrigatorio');

        const newInscrito = {...req};
        return app.db('inscrito').insert(newInscrito, ['numero']);
    };

    /**Atualizar o inscrito selecionado */
    const update = async (id, inscrito) => {
        return app.db('inscrito').where({ id }).update(inscrito, ['numero']);
    };

    /**Remover um inscrito */
    const remove = async (id) => {
        return app.db('inscrito').where(id).del();
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

