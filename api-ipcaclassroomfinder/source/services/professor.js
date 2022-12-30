const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('professor').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('professor').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.sobrenome) throw new ValidationError('O Sobrenome é um campo obrigatorio');
        if(!req.especialidade) throw new ValidationError('A Especialidade é um campo obrigatorio');

        const newProfessor = {...req};
        return app.db('professor').insert(newProfessor, ['nome', 'sobrenome', 'especialidade']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, professor) => {
        return app.db('professor').where({ id }).update(professor, ['nome', 'sobrenome', 'especialidade']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('professor').where(id).del();
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

