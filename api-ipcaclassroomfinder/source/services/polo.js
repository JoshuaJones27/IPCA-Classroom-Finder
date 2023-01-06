const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('polo').where(filter).select(['idPolo', 'nome', 'localizacao']);
    }

    /**Selecionar todos os polos  */
    const getAll = async () => {
        return app.db('polo').select(['*']);
    };

    /**Filtragem apenas os polos por ID */
    const getAllID = async (filter) => {
        return app.db('polo').where(filter).select(['*']);
    };

    /**Criação do registo de um novo polo */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localizacao é um campo obrigatorio');

        const newPolo = {...req};
        return app.db('polo').insert(newPolo, ['nome', 'localizacao']);
    };

    /**Atualizar o polo selecionado */
    const update = async (id, polo) => {
        return app.db('polo').where({ id }).update(polo, ['nome', 'localizacao']);
    };

    /**Remover um polo */
    const remove = async (id) => {
        return app.db('polo').where(id).del();
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

