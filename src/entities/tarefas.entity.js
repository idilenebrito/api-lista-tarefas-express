const sequelize = require("sequelize");
const database = require("../db");

class Tarefa extends sequelize.Model {}

Tarefa.init(
  {
    idTarefas: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: sequelize.STRING,
      allowNull: true,
    },
    concluido: {
      type: sequelize.BOOLEAN,
      allowNull: true,
    },
    prioridade: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: database,
    modelName: "Tarefa",
    tableName: "Tarefas",
    // O sequelize cria esses dois campos por padrão
    // São campo necessários para controle de entidades
    // Porém não os utilizaremos nesse tutorial
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Tarefa;
