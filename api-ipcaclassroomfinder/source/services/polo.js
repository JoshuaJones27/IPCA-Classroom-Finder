const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('polo').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('polo').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localizacao é um campo obrigatorio');

        const newPolo = {...req};
        return app.db('polo').insert(newPolo, ['nome', 'localizacao']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, polo) => {
        return app.db('polo').where({ id }).update(polo, ['nome', 'localizacao']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('polo').where(id).del();
    };

    return {
        // findOne,
        //findItemByColor,
        getAll,
        getAllID,
        create,
        update,
        remove,
    };
};

