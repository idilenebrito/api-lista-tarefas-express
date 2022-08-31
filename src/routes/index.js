const express = require("express");
const router = express.Router();
const tarefasRoute = require("./tarefas.route");

router.use(
  "/tarefas",
  tarefasRoute
  // #swagger.name = 'tarefas-controller'
  // #swagger.description = 'Tarefas Controller.'
  // #swagger.tags = ['Tarefas']
);

module.exports = router;