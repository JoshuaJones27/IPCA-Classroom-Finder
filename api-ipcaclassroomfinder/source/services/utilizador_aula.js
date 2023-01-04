const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('utilizador_aulas').where(filter).select(['idUtilizador', 'idAula']);
    }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('utilizador_aulas').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('utilizador_aulas').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nomeSala) throw new ValidationError('O Nome da Sala é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descrição é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localização da Sala é um campo obrigatorio');
        if(!req.lotacao) throw new ValidationError('A Lotação é um campo obrigatorio');

        const newUtilizadorAula = {...req};
        return app.db('utilizador_aulas').insert(newUtilizadorAula, ['idUtilizador', 'idAula']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, utilizadorAula) => {
        return app.db('utilizador_aulas').where({ id }).update(utilizadorAula, ['idUtilizador', 'idAula']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('utilizador_aulas').where(id).del();
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

