// 'check' é usado para validar os dados de entrada, e 'validationResult' conterá o resultado se a entrada é válida ou não.
const { check, validationResult } = require("express-validator");

// validação dos dados
const criarTarefaValidator = [
  check("titulo").notEmpty().withMessage("Titulo deve ser definido"),

  check("descricao").optional({ nullable: true }),

  check("concluido").default([false]).optional({ nullable: true }),

  // check("prioridade")
  //   .default([5])
  //   .isIn([1, 2, 3, 4, 5])
  //   .withMessage("O valor da prioridade da tarefa precisa estar entre 1 a 5"),
  (req, res, next) => {
    const errors = validationResult(req);
    // se nao tiver erros invoca função next() para chamar a próxima função de middleware 'tarefasController.criartarefa'
    if (errors.isEmpty()) return next();
    // se encontrarmos erros, passamos status '422' e erros encontrados.
    res.status(422).json({ errors: errors.array() });
  },
];

// outra validação de dados
const atualizarStatusTarefaValidator = [
  // valide se existe 'artista', caso não passe a mensagem "Artista deve..."
  check("concluido").notEmpty().withMessage("O status tem que ser definido"),
  (req, res, next) => {
    const errors = validationResult(req);
    //se nao tiver erros invoca função next() para chamar a próxima função de middleware 'tarefasController.criartarefa'
    if (errors.isEmpty()) return next();
    //se encontrarmos erros, passamos status'422' e erros encontrados.
    res.status(422).json({ errors: errors.array() });
  },
];

const atualizarPrioridadeTarefaValidator = [
  // valide se existe 'artista', caso não passe a mensagem "Artista deve..."
  check("prioridade")
    .notEmpty()
    .withMessage("A prioridade tem que ser definido"),
  (req, res, next) => {
    const errors = validationResult(req);
    //se nao tiver erros invoca função next() para chamar a próxima função de middleware 'tarefasController.criartarefa'
    if (errors.isEmpty()) return next();
    //se encontrarmos erros, passamos status'422' e erros encontrados.
    res.status(422).json({ errors: errors.array() });
  },
];

module.exports = {
  criarTarefa: criarTarefaValidator,
  atualizarStatusTarefa: atualizarStatusTarefaValidator,
  atualizarPrioridadeTarefa: atualizarPrioridadeTarefaValidator,
};
