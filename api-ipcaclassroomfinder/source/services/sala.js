const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('sala').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('sala').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nomeSala) throw new ValidationError('O Nome da Sala é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descrição é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localização da Sala é um campo obrigatorio');
        if(!req.lotacao) throw new ValidationError('A Lotação é um campo obrigatorio');

        const newSala = {...req};
        return app.db('sala').insert(newSala, ['nomeSala', 'descricao', 'localizacao' , 'lotacao']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, sala) => {
        return app.db('sala').where({ id }).update(sala, ['nomeSala', 'descricao', 'localizacao' , 'lotacao']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('sala').where(id).del();
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

