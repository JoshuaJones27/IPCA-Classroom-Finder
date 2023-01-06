const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('sala').where(filter).select(['idSala', 'nomeSala', 'descricao', 'localizacao', 'lotacao']);
    }

    /**Selecionar todos as salas */
    const getAll = async () => {
        return app.db('sala').select(['*']);
    };

    /**Filtragem apenas as salas por ID */
    const getAllID = async (filter) => {
        return app.db('sala').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova sala */
    const create = async (req, res) => {
        if(!req.nomeSala) throw new ValidationError('O Nome da Sala é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descrição é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localização da Sala é um campo obrigatorio');
        if(!req.lotacao) throw new ValidationError('A Lotação é um campo obrigatorio');

        const newSala = {...req};
        return app.db('sala').insert(newSala, ['nomeSala', 'descricao', 'localizacao' , 'lotacao']);
    };

    /**Atualizar a sala selecionado */
    const update = async (id, sala) => {
        return app.db('sala').where({ id }).update(sala, ['nomeSala', 'descricao', 'localizacao' , 'lotacao']);
    };

    /**Remover uma sala */
    const remove = async (id) => {
        return app.db('sala').where(id).del();
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

