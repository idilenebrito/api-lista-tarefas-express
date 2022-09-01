const {
  TarefaInvalidoExeption,
  TarefaNaoEncontradoExeption,
} = require("../exceptions/tarefas.exception");

const Tarefa = require("../entities/tarefas.entity");

async function create(tarefa = { titulo, descricao, concluido, prioridade }) {
  return Tarefa.create(tarefa);
}

async function listaDeTarefas() {
  return Tarefa.findAll();
}

async function buscarPorId(idTarefas) {
  const tarefa = await Tarefa.findByPk(idTarefas);

  if (!tarefa) throw new TarefaNaoEncontradoExeption();

  return tarefa;
}

async function atualizarStatusTarefa(idTarefas, data = { concluido }) {
  const tarefa = await Tarefa.findByPk(idTarefas);

  if (!tarefa) throw new TarefaNaoEncontradoExeption();

  return (
    Tarefa.update(data, { where: { idTarefas }, returning: true })
      // Fazemos isso para retornar o tarefa atualizado no response
      // o sequelize retorna um array com o número de linhas afetadas e uma lista de objetos afetados
      // por isso desconstruímos o array no parâmetro do then e retornamos o model
      .then(([_, models]) => models[0])
  );
}

async function atualizarPrioridadeTarefa(idTarefas, data = { prioridade }) {
  const tarefa = await Tarefa.findByPk(idTarefas);

  if (!tarefa) throw new TarefaNaoEncontradoExeption();

  return (
    Tarefa.update(data, { where: { idTarefas }, returning: true })
      // Fazemos isso para retornar o tarefa atualizado no response
      // o sequelize retorna um array com o número de linhas afetadas e uma lista de objetos afetados
      // por isso desconstruímos o array no parâmetro do then e retornamos o model
      .then(([_, models]) => models[0])
  );
}

async function deletar(idTarefas) {
  const tarefa = await Tarefa.findByPk(idTarefas);

  if (!tarefa) throw new TarefaNaoEncontradoExeption();

  return (
    Tarefa.destroy({ where: { idTarefas } })
      // Fazemos isso para retornar a tarefa deletado no response
      .then(() => tarefa)
  );
}

module.exports = {
  create,
  listaDeTarefas,
  buscarPorId,
  atualizarStatusTarefa,
  atualizarPrioridadeTarefa,
  deletar,
};
