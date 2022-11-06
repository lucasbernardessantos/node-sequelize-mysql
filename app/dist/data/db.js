"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
let sequelize = new sequelize_1.Sequelize('trabalhadores', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.sequelize = sequelize;
sequelize.authenticate()
    .then(() => {
    console.log(`Conexão entre o banco e a aplicação bem sucedida.`);
})
    .catch((err) => {
    console.log(`Erro na conexão com o banco. ${err}.`);
});
