const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aula').where(filter).select(['id', 'nome', 'descricao']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aula').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aula').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');

        const newAula = {...req};
        return app.db('aula').insert(newAula, ['nome', 'descricao']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aula) => {
        return app.db('aula').where({ id }).update(aula, ['nome', 'descricao']);
    };

    /**Remover uma aula */
    const remove = async (id) => {
        return app.db('aula').where(id).del();
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

