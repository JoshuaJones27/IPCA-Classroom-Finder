const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('siges').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('siges').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.descricao) throw new ValidationError('A Descrição é um campo obrigatorio');

        const newSiges = {...req};
        return app.db('siges').insert(newSiges, ['descricao']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, siges) => {
        return app.db('siges').where({ id }).update(siges, ['descricao']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('siges').where(id).del();
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

