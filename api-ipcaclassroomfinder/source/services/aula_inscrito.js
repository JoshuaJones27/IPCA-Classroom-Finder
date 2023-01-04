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

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');

        const newAulaInscrito = {...req};
        return app.db('aulas_inscritos').insert(newAulaInscrito, ['idAula', 'idInscritos']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aulaInscrito) => {
        return app.db('aulas_inscritos').where({ id }).update(aulaInscrito, ['idAula', 'idInscritos']);
    };

    /**Remover uma aula */
    const remove = async (id) => {
        return app.db('aulas_inscritos').where(id).del();
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

