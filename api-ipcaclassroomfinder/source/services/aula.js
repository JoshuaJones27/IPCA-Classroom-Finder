const ValidationError = require('../errors/validationError');

module.exports = (app) => {
    const findOne = (filter = {}) => {
        return app.db('aulas').where(filter).select(['idAula', 'nome', 'descricao', 'idProfessor']);
    }

    /**Selecionar todos as aulas */
    const getAll = async () => {
        return app.db('aulas').select(['*']);
    };

    /**Filtragem apenas as compras por ID */
    const getAllID = async (filter) => {
        return app.db('aulas').where(filter).select(['*']);
    };

    /**Criação do registo de uma nova compra */
    const create = async (req, res) => {
        if(!req.nome) throw new ValidationError('O Nome é um campo obrigatorio');
        if(!req.descricao) throw new ValidationError('A Descricao é um campo obrigatorio');
        if(!req.idProfessor) throw new ValidationError('O ID Professor é um campo obrigatorio');

        const newAula = {...req};
        return app.db('aulas').insert(newAula, ['nome', 'descricao', 'idProfessor']);
    };

    /**Atualizar a aula selecionado */
    const update = async (idAula, aula) => {
        return app.db('aulas').where({ idAula }).update(aula, ['nome', 'descricao', 'idProfessor']);
    };

    /**Remover uma aula */
    const remove = async (id) => {
        return app.db('aulas').where(id).del();
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

