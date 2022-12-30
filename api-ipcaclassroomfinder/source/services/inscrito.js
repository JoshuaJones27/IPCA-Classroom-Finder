const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('inscrito').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('inscrito').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.numero) throw new ValidationError('O Numero é um campo obrigatorio');

        const newInscrito = {...req};
        return app.db('inscrito').insert(newInscrito, ['numero']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, inscrito) => {
        return app.db('inscrito').where({ id }).update(inscrito, ['numero']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('inscrito').where(id).del();
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

