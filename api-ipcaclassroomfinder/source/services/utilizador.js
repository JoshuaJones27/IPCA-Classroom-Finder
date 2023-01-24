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

    const forgotPassword = async (filter) => {
        if (!filter.email) throw new ValidationError('O email é um campo obrigatório');
        if (!filter.password) throw new ValidationError('A password é um campo obrigatório');
        if (!filter.confirmpassword) throw new ValidationError('A password é um campo obrigatório');
        if (filter.password !== filter.confirmpassword) throw new ValidationError('As password têm que coincidir');
        if (!emailRegex.test(filter.email)) throw new ValidationError('O email não segue os padrões convencionais!');
    
        const result = await app.db('utilizadores').where('email', filter.email).first();
        throw new ValidationError('Verifique os seus detalhes!');
      };

    /**Atualizar o utilizador selecionado */
    const update = async (idUtilizador, utilizador) => {
        return app.db('utilizador').where({ idUtilizador }).update(utilizador, ['nome', 'sobrenome', 'email', 'palavraPasse']);
    };

    /**Remover um utilizador */
    const remove = async (idUtilizador) => {
        return app.db('utilizador').where(idUtilizador).del();
    };

    return {
        findOne,
        getAll,
        getAllID,
        forgotPassword,
        create,
        update,
        remove,
    };
};