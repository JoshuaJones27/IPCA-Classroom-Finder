const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('cursos').where(filter).select(['idCurso', 'nome', 'descricao', 'idPolo']);
    }

    /**Selecionar todos os cursos */
    const getAll = async () => {
        return app.db('cursos').select(['*']);
    };

    /**Filtragem apenas os cursos por ID */
    const getAllID = async (filter) => {
        return app.db('cursos').where(filter).select(['*']);
    };

    /**Criação do registo de um novo curso */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');
        if(!req.idPolo) throw new ValidationError('O ID Polo é um campo obrigatorio');

        const newCurso = {...req};
        return app.db('cursos').insert(newCurso, ['nome', 'descricao', 'idPolo']);
    };

    /**Atualizar o curso selecionado */
    const update = async (idCurso, curso) => {
        return app.db('cursos').where({ idCurso }).update(curso, ['nome', 'descricao', 'idPolo']);
    };

    /**Remover um curso */
    const remove = async (idCurso) => {
        return app.db('cursos').where(idCurso).del();
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

