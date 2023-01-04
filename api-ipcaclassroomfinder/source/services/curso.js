const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('curso').where(filter).select(['idCurso', 'nome', 'descricao']);
    }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('curso').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('curso').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');

        const newCurso = {...req};
        return app.db('curso').insert(newCurso, ['nome', 'descricao']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, curso) => {
        return app.db('curso').where({ id }).update(curso, ['nome', 'descricao']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('curso').where(id).del();
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

