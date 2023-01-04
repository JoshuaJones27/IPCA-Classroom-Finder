const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aulas_cursos').where(filter).select(['idAula', 'idCurso']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aulas_cursos').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aulas_cursos').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');

        const newAulaCurso = {...req};
        return app.db('aulas_cursos').insert(newAulaCurso, ['idAula', 'idCurso']);
    };

    /**Atualizar a aula selecionado */
    const update = async (id, aulaCurso) => {
        return app.db('aulas_cursos').where({ id }).update(aulaCurso, ['idAula', 'idCurso']);
    };

    /**Remover uma aula */
    const remove = async (id) => {
        return app.db('aulas_cursos').where(id).del();
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

