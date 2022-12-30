const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('siga').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('siga').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.descricao) throw new ValidationError('A Descrição é um campo obrigatorio');

        const newSiga = {...req};
        return app.db('siga').insert(newSiga, ['descricao']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, siga) => {
        return app.db('siga').where({ id }).update(siga, ['descricao']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('siga').where(id).del();
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

