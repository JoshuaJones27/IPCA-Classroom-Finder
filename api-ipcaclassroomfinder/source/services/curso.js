const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('curso').where(filter).select(['idCurso', 'nome', 'descricao']);
    }

    /**Selecionar todos os cursos */
    const getAll = async () => {
        return app.db('curso').select(['*']);
    };

    /**Filtragem apenas os cursos por ID */
    const getAllID = async (filter) => {
        return app.db('curso').where(filter).select(['*']);
    };

    /**Criação do registo de um novo curso */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');

        const newCurso = {...req};
        return app.db('curso').insert(newCurso, ['nome', 'descricao']);
    };

    /**Atualizar o curso selecionado */
    const update = async (id, curso) => {
        return app.db('curso').where({ id }).update(curso, ['nome', 'descricao']);
    };

    /**Remover um curso */
    const remove = async (id) => {
        return app.db('curso').where(id).del();
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

