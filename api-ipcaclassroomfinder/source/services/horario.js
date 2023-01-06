const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('horario').where(filter).select(['idHorario', 'horaInicio', 'horaFim']);
    }

    /**Selecionar todos os horarios */
    const getAll = async () => {
        return app.db('horario').select(['*']);
    };

    /**Filtragem apenas os horarios por ID */
    const getAllID = async (filter) => {
        return app.db('horario').where(filter).select(['*']);
    };

    /**Criação do registo de um novo horario */
    const create = async (req, res) => {
        if(!req.horaInicio) throw new ValidationError('A Hora de Inicio é um campo obrigatorio');
        if(!req.horaFim) throw new ValidationError('A Hora de Fim é um campo obrigatorio');

        const newHorario = {...req};
        return app.db('horario').insert(newHorario, ['horaInicio', 'horaFim']);
    };

    /**Atualizar o horario selecionado */
    const update = async (id, horario) => {
        return app.db('horario').where({ id }).update(horario, ['horaInicio', 'horaFim']);
    };

    /**Remover um horario */
    const remove = async (id) => {
        return app.db('horario').where(id).del();
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

