const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('polos').where(filter).select(['idPolo', 'nome', 'localizacao']);
    }

    /**Selecionar todos os polos  */
    const getAll = async () => {
        return app.db('polos').select(['*']);
    };

    /**Filtragem apenas os polos por ID */
    const getAllID = async (filter) => {
        return app.db('polos').where(filter).select(['*']);
    };

    /**Criação do registo de um novo polo */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localizacao é um campo obrigatorio');

        const newPolo = {...req};
        return app.db('polos').insert(newPolo, ['nome', 'localizacao']);
    };

    /**Atualizar o polo selecionado */
    const update = async (idPolo, polo) => {
        return app.db('polos').where({ idPolo }).update(polo, ['nome', 'localizacao']);
    };

    /**Remover um polo */
    const remove = async (idPolo) => {
        return app.db('polos').where(idPolo).del();
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

