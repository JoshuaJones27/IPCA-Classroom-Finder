const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('salas').where(filter).select(['idSala', 'nomeSala', 'descricao', 'localizacao', 'lotacao']);
    }

    /**Selecionar todos as salas */
    const getAll = async () => {
        return app.db('salas').select(['*']);
    };

    /**Filtragem apenas as salas por ID */
    const getAllID = async (filter) => {
        return app.db('salas').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova sala */
    const create = async (req, res) => {
        if(!req.nomeSala) throw new ValidationError('O Nome da Sala é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descrição é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localização da Sala é um campo obrigatorio');
        if(!req.lotacao) throw new ValidationError('A Lotação é um campo obrigatorio');

        const newSala = {...req};
        return app.db('salas').insert(newSala, ['nomeSala', 'descricao', 'localizacao' , 'lotacao']);
    };

    /**Atualizar a sala selecionado */
    const update = async (idSala, sala) => {
        return app.db('salas').where({ idSala }).update(sala, ['nomeSala', 'descricao', 'localizacao' , 'lotacao']);
    };

    /**Remover uma sala */
    const remove = async (idSala) => {
        return app.db('salas').where(idSala).del();
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

