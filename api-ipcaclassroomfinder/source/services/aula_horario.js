const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aulas_horarios').where(filter).select(['idAula', 'idHorario']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aulas_horarios').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aulas_horarios').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');

        const newAulaHorario = {...req};
        return app.db('aulas_horarios').insert(newAulaHorario, ['idAula', 'idHorario']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aulaHorario) => {
        return app.db('aulas_horarios').where({ id }).update(aulaHorario, ['idAula', 'idHorario']);
    };

    /**Remover uma aula */
    const remove = async (id) => {
        return app.db('aulas_horarios').where(id).del();
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

