const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('horarios').where(filter).select(['idHorario', 'horaInicio', 'horaFim']);
    }

    /**Selecionar todos os horarios */
    const getAll = async () => {
        return app.db('horarios').select(['*']);
    };

    /**Filtragem apenas os horarios por ID */
    const getAllID = async (filter) => {
        return app.db('horarios').where(filter).select(['*']);
    };

    /**Criação do registo de um novo horario */
    const create = async (req, res) => {
        if(!req.horaInicio) throw new ValidationError('A Hora de Inicio é um campo obrigatorio');
        if(!req.horaFim) throw new ValidationError('A Hora de Fim é um campo obrigatorio');

        const newHorario = {...req};
        return app.db('horarios').insert(newHorario, ['horaInicio', 'horaFim']);
    };

    /**Atualizar o horario selecionado */
    const update = async (idHorario, horario) => {
        return app.db('horarios').where({ idHorario }).update(horario, ['horaInicio', 'horaFim']);
    };

    /**Remover um horario */
    const remove = async (idHorario) => {
        return app.db('horarios').where(idHorario).del();
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

