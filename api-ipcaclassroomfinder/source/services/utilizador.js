const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('utilizador').where(filter).select(['idUtilizador', 'nome', 'sobrenome', 'email', 'palavraPasse']);
    }

    /**Selecionar todos os utilizadores */
    const getAll = async () => {
        return app.db('utilizador').select(['*']);
    };

    /**Filtragem apenas os utilizadores por ID */
    const getAllID = async (filter) => {
        return app.db('utilizador').where(filter).select(['*']);
    };

    /**Criação do registo de um novo utilizador */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.sobrenome) throw new ValidationError('O Sobrenome é um campo obrigatorio');
        if(!req.email) throw new ValidationError('O E-mail é um campo obrigatorio');
        if(!req.palavraPasse) throw new ValidationError('A Palavra Passe é um campo obrigatorio');


        const newUtilizador = {...req};
        return app.db('utilizador').insert(newUtilizador, ['nome', 'sobrenome', 'email', 'palavraPasse']);
    };

    /**Atualizar o utilizador selecionado */
    const update = async (id, utilizador) => {
        return app.db('utilizador').where({ id }).update(utilizador, ['nome', 'sobrenome', 'email', 'palavraPasse']);
    };

    /**Remover um utilizador */
    const remove = async (id) => {
        return app.db('utilizador').where(id).del();
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

