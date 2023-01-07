// Define uma funcao construtora para um erro costumizado chamadao ValidationError
module.exports = function validationError(message) {
    //Define o nome do erro
    this.name = 'validationError';
    //Define o erro da mensagem
    this.message = message;
  };
  