const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('professor').where(filter).select(['idProfessor', 'idEspecialidade', 'idUtilizador']);
    }

    /**Selecionar todos os professores */
    const getAll = async () => {
        return app.db('professor').select(['*']);
    };

    /**Filtragem apenas os professores por ID */
    const getAllID = async (filter) => {
        return app.db('professor').where(filter).select(['*']);
    };

    /**Criação do registo de um novo professor */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.sobrenome) throw new ValidationError('O Sobrenome é um campo obrigatorio');
        if(!req.especialidade) throw new ValidationError('A Especialidade é um campo obrigatorio');

        const newProfessor = {...req};
        return app.db('professor').insert(newProfessor, ['nome', 'sobrenome', 'especialidade']);
    };

    /**Atualizar o professor selecionado */
    const update = async (id, professor) => {
        return app.db('professor').where({ id }).update(professor, ['nome', 'sobrenome', 'especialidade']);
    };

    /**Remover um professor */
    const remove = async (id) => {
        return app.db('professor').where(id).del();
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

