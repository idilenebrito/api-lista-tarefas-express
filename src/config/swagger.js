const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: 'lista de tarefas',
        description: 'Exercicio de node.js, com Express e Sequelize ',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};
// criar a pasta "swagger" manualmente na raiz do projeto
const outputFile = "./swagger/swagger_output.json";
const endpointFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointFiles, doc);