class TarefaInvalidoExeption extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 400;
    }
  }
  
  class TarefaNaoEncontradoExeption extends Error {
    constructor() {
      super("Tarefa não encontrada");
      this.statusCode = 404;
    }
  }
  
  module.exports = {
    TarefaInvalidoExeption,
    TarefaNaoEncontradoExeption
  };