const tarefaService = require("../services/tarefas.service");

async function listar(req, res) {
  //O objeto "req" representa a solicitação HTTP com propriedades como: parameters, body, HTTP headers.
  const listaDeTarefas = await tarefaService.listaDeTarefas();
  // O objeto "res" representa a resposta HTTP que express envia quando recebe uma solicitação HTTP.
  res.send(listaDeTarefas);
}

async function buscarPorId(req, res, next) {
  try {
    // "req.params" é um objeto que contém propriedades mapeadas para os “parâmetros” da rota nomeada, obtemos o ID neste caso.
    const id = req.params.id;
    const tarefaById = await tarefaService.buscarPorId(id);
    res.send(tarefaById);
  } catch (error) {
    next(error);
  }
}

async function criarTarefa(req, res, next) {
  try {
    const tarefa = await tarefaService.create(req.body);
    res.json(tarefa);
  } catch (error) {
    next(error);
  }
}

async function atualizarStatusTarefa(req, res, next) {
  try {
    const idTarefa = req.params.id;
    const updatedStatusTarefa =  await tarefaService.atualizarStatusTarefa(idTarefa, req.body);
    res.send(updatedStatusTarefa);
  } catch (error) {
    next(error);
  }
}


async function atualizarPrioridadeTarefa(req, res, next) {
    try {
      const idTarefa = req.params.id;
      const updatedStatusTarefa =  await tarefaService.atualizarPrioridadeTarefa(idTarefa, req.body);
      res.send(updatedStatusTarefa);
    } catch (error) {
      next(error);
    }
  }

async function deletarTarefa(req, res, next) {
  try {
    const idTarefa = req.params.id;
    const deleteTarefa = await tarefaService.deletar(idTarefa);
    res.send(deleteTarefa);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  listar,
  buscarPorId,
  criarTarefa,
  deletarTarefa,
  atualizarStatusTarefa,
  atualizarPrioridadeTarefa,
};
