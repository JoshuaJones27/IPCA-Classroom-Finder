const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('inscritos').where(filter).select(['idInscritos', 'numero']);
    }

    /**Selecionar todos os inscritos */
    const getAll = async () => {
        return app.db('inscritos').select(['*']);
    };

    /**Filtragem apenas os inscritos por ID */
    const getAllID = async (filter) => {
        return app.db('inscritos').where(filter).select(['*']);
    };

    /**Criação do registo de um novo inscrito */
    const create = async (req, res) => {
        if(!req.numero) throw new ValidationError('O Numero é um campo obrigatorio');

        const newInscrito = {...req};
        return app.db('inscritos').insert(newInscrito, ['numero']);
    };

    /**Atualizar o inscrito selecionado */
    const update = async (idInscritos, inscrito) => {
        return app.db('inscritos').where({ idInscritos }).update(inscrito, ['numero']);
    };

    /**Remover um inscrito */
    const remove = async (idInscritos) => {
        return app.db('inscritos').where(idInscritos).del();
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

