// Define uma funcao construtora para um erro costumizado chamadao ForbiddenError
module.exports = function ForbiddenError(message = 'Não tem acesso ao recurso solicitado') {
    //Define o nome do erro
    this.name = 'forbiddenError';
    //Define o erro da mensagem
    this.message = message;
  };
  