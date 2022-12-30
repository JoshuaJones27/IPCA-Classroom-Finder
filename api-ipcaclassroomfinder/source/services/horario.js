const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    // const findOne = (filter = {}) => {
    //     return app.db('item').where(filter).select(['id', 'tipoId', 'tamanho', 'descricao', 'stock', 'imagem']);
    // }

    /**Selecionar todos as compras */
    const getAll = async () => {
        return app.db('horario').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('horario').where(filter).select(['*']);
    };

    //const findItemByColor = 

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.horaInicio) throw new ValidationError('A Hora de Inicio é um campo obrigatorio');
        if(!req.horaFim) throw new ValidationError('A Hora de Fim é um campo obrigatorio');

        const newHorario = {...req};
        return app.db('horario').insert(newHorario, ['horaInicio', 'horaFim']);
    };

    /**Atualizar a compra selecionado */
    const update = async (id, horario) => {
        return app.db('horario').where({ id }).update(horario, ['horaInicio', 'horaFim']);
    };

    /**Remover uma compra */
    const remove = async (id) => {
        return app.db('horario').where(id).del();
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

