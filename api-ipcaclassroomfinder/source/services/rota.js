const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('rota').where(filter).select(['idRota', 'distanciaRota', 'coordenadaInicio', 'coordenadaFim', 'idSala']);
    }

    /**Selecionar todos as rotas */
    const getAll = async () => {
        return app.db('rota').select(['*']);
    };

    /**Filtragem apenas as rotas por ID */
    const getAllID = async (filter) => {
        return app.db('rota').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova rota */
    const create = async (req, res) => {
        if(!req.distanciaRota) throw new ValidationError('A Distancia Rota é um campo obrigatorio');
        if(!req.coordenadaInicio) throw new ValidationError('A Coordenada Inicio é um campo obrigatorio');
        if(!req.coordenadaFim) throw new ValidationError('A Coordenada Fim é um campo obrigatorio');

        const newRota = {...req};
        return app.db('rota').insert(newRota, ['distanciaRota', 'coordenadaInicio', 'coordenadaFim']);
    };

    /**Atualizar a rota selecionado */
    const update = async (id, rota) => {
        return app.db('rota').where({ id }).update(rota, ['distanciaRota', 'coordenadaInicio', 'coordenadaFim']);
    };

    /**Remover uma rota */
    const remove = async (id) => {
        return app.db('rota').where(id).del();
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

