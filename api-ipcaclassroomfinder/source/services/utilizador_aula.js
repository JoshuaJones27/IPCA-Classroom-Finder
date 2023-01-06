const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('utilizador_aulas').where(filter).select(['idUtilizador', 'idAula']);
    }

    /**Selecionar todos os utilizador_aula */
    const getAll = async () => {
        return app.db('utilizador_aulas').select(['*']);
    };

    /**Filtragem apenas os utilizador_aula por ID */
    const getAllID = async (filter) => {
        return app.db('utilizador_aulas').where(filter).select(['*']);
    };

    /**Criação do registo de um novo utilizador_aula */
    const create = async (req, res) => {
        if(!req.nomeSala) throw new ValidationError('O Nome da Sala é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descrição é um campo obrigatorio');
        if(!req.localizacao) throw new ValidationError('A Localização da Sala é um campo obrigatorio');
        if(!req.lotacao) throw new ValidationError('A Lotação é um campo obrigatorio');

        const newUtilizadorAula = {...req};
        return app.db('utilizador_aulas').insert(newUtilizadorAula, ['idUtilizador', 'idAula']);
    };

    /**Atualizar o utilizador_aula selecionado */
    const update = async (id, utilizadorAula) => {
        return app.db('utilizador_aulas').where({ id }).update(utilizadorAula, ['idUtilizador', 'idAula']);
    };

    /**Remover um utilizador_aula */
    const remove = async (id) => {
        return app.db('utilizador_aulas').where(id).del();
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

