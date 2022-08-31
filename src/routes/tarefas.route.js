const express = require("express");
const router = express.Router();
const tarefasController = require("../controllers/tarefas.controller");
const tarefasValidator = require("../middlewares/validators/tarefas.validate");

router.get("/", tarefasController.listar);
router.post(
  "/",
  tarefasValidator.criarTarefa,
  tarefasController.criarTarefa
  /*  #swagger.parameters['tarefa'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          titulo: {
            type: "string",          
          },
          descricao: {
            type: "string"
          },
          concluido: {
            type: "boolean",          
          },
          prioridade: {
            type: "integer"
          }
        },
        required: ["titulo"]
      },
  } */
);
router.get("/:id", tarefasController.buscarPorId);

router.put(
  "/status/:id",
  tarefasValidator.atualizarStatusTarefa,
  tarefasController.atualizarStatusTarefa
  /*  #swagger.parameters['tarefa'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          concluido: {
            type: "boolean"
          }
        },
        required: ["concluido"]
      },
  } */
);

router.put(
  "/prioridade/:id",
  tarefasValidator.atualizarPrioridadeTarefa,
  tarefasController.atualizarPrioridadeTarefa
  /*  #swagger.parameters['tarefa'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          prioridade: {
            type: "integer"
          }
        },
        required: ["prioridade"]
      },
  } */
);

router.delete("/:id", tarefasController.deletarTarefa);
module.exports = router;