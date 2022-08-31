const {
    TarefaInvalidoExeption,
    TarefaNaoEncontradoExeption,
  } = require("../exceptions/tarefas.exception");
  
  const Tarefa = require("../entities/tarefas.entity");
  
  async function create(tarefa = { titulo, descricao, concluido, prioridade }) {
    // Regra
    tarefa.concluido = false;
    if (tarefa.prioridade === null){
      tarefa.prioridade = 5;
    }
      
    return Tarefa.create(tarefa);
  }
  
  async function listaDeTarefas() {
    return Tarefas.findAll();
  }
  
  async function buscarPorId(id) {
    const tarefa = await Tarefa.findByPk(id);
  
    if (!tarefa) throw new TarefaNaoEncontradoExeption();
  
    return tarefa;
  }
  
  async function atualizarStatusTarefa(idTarefa, data = { concluido }) {
    const tarefa = await Tarefa.findByPk(idTarefa);
  
    if (!tarefa) throw new TarefaNaoEncontradoExeption();
  
    return (
      Tarefa.update(data, { where: { idTarefa }, returning: true })
        // Fazemos isso para retornar o album atualizado no response
        // o sequelize retorna um array com o número de linhas afetadas e uma lista de objetos afetados
        // por isso desconstruímos o array no parâmetro do then e retornamos o model
        .then(([_, models]) => models[0])
    );
  }

  async function atualizarPrioridadeTarefa(idTarefa, data = { prioridade }) {
    const tarefa = await Tarefa.findByPk(idTarefa);
  
    if (!tarefa) throw new TarefaNaoEncontradoExeption();
  
    return (
      Tarefa.update(data, { where: { idTarefa }, returning: true })
        // Fazemos isso para retornar o album atualizado no response
        // o sequelize retorna um array com o número de linhas afetadas e uma lista de objetos afetados
        // por isso desconstruímos o array no parâmetro do then e retornamos o model
        .then(([_, models]) => models[0])
    );
  }
  
  async function deletar(idTarefa) {
    const tarefa = await Tarefa.findByPk(idTarefa);
  
    if (!tarefa) throw new TarefaNaoEncontradoExeption();
  
    return (
      Tarefa.destroy({ where: { idTarefa } })
        // Fazemos isso para retornar o album deletado no response
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
  