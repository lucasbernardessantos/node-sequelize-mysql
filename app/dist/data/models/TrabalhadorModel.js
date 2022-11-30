"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabalhadorModel = void 0;
const sequelize_1 = require("sequelize");
const db_js_1 = require("../db.js");
let sequelize = db_js_1.db.criarConexao();
let TrabalhadorModel = sequelize.define('trabalhadores', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: sequelize_1.DataTypes.FLOAT(6, 2),
        allowNull: false
    }
});
exports.TrabalhadorModel = TrabalhadorModel;
TrabalhadorModel.sync();
