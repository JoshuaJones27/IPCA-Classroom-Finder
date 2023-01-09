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
        if(!req.idEspecialidade) throw new ValidationError('O ID Especialidade é um campo obrigatorio');
        if(!req.idUtilizador) throw new ValidationError('O ID Utilizador é um campo obrigatorio');

        const newProfessor = {...req};
        return app.db('professor').insert(newProfessor, ['idEspecialidade', 'idUtilizador']);
    };

    /**Atualizar o professor selecionado */
    const update = async (idProfessor, professor) => {
        return app.db('professor').where({ idProfessor }).update(professor, ['idEspecialidade', 'idUtilizador']);
    };

    /**Remover um professor */
    const remove = async (idProfessor) => {
        return app.db('professor').where(idProfessor).del();
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

