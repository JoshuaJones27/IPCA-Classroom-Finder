const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('utilizador').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('utilizador').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O nome é um campo obrigatorio');
        if(!req.sobrenome) throw new ValidationError('O sobrenome é um campo obrigatorio');
        if(!req.tipoUtilizador) throw new ValidationError('O tipo utilizador é um campo obrigatorio');
        if(!req.dataNascimento) throw new ValidationError('A data de nascimento é um campo obrigatorio');
        if(!req.curso) throw new ValidationError('O curso é um campo obrigatorio');
        if(!req.nif) throw new ValidationError('O NIF é um campo obrigatorio');

        const newUtilizador = {...req};
        return app.db('utilizador').insert(newUtilizador, ['nome', 'sobrenome', 'tipoUtilizador', 'dataNascimento', 'curso', 'nif']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, utilizador) => {
        return app.db('utilizador').where({ id }).update(utilizador, ['nome', 'sobrenome', 'tipoUtilizador', 'dataNascimento', 'curso', 'nif']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('utilizador').where(id).del();
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

