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

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');

        const newAulaSala = {...req};
        return app.db('aulas_salas').insert(newAulaSala, ['idAula', 'idSala']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aulaSala) => {
        return app.db('aulas_salas').where({ id }).update(aulaSala, ['idAula', 'idSala']);
    };

    /**Remover uma aula */
    const remove = async (id) => {
        return app.db('aulas_salas').where(id).del();
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

