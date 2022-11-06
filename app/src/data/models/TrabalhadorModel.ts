import { DataTypes } from "sequelize"
import { db } from "../db.js"

let sequelize = db.criarConexao()

let TrabalhadorModel = sequelize.define('trabalhadores', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

TrabalhadorModel.sync()
 
export { TrabalhadorModel } 