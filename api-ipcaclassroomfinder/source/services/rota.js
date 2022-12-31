const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('rota').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('rota').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.distanciaRota) throw new ValidationError('A Distancia Rota é um campo obrigatorio');
        if(!req.coordenadaInicio) throw new ValidationError('A Coordenada Inicio é um campo obrigatorio');
        if(!req.coordenadaFim) throw new ValidationError('A Coordenada Fim é um campo obrigatorio');

        const newRota = {...req};
        return app.db('rota').insert(newRota, ['distanciaRota', 'coordenadaInicio', 'coordenadaFim']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, rota) => {
        return app.db('rota').where({ id }).update(rota, ['distanciaRota', 'coordenadaInicio', 'coordenadaFim']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('rota').where(id).del();
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

