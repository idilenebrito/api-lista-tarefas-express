const sequelize = require('sequelize');
const database = new sequelize('TarefasAPIExpress','sa','It3r1509',
{
    dialect:'mssql', host:'localhost', port:1433
});

database.sync();

module.exports = database;