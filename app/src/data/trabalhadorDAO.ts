import { Trabalhador } from '../models/Trabalhador.js'
import { TrabalhadorModel } from './models/TrabalhadorModel.js'
import { db } from './db.js'
import { InTrabalhador } from '../interface/InTrabalhador.js'

export class trabalhadorDAO {
  static async cadastrar(trabalhador: Trabalhador): Promise<void> {
    let sequelize = db.criarConexao()
    
    try {
      await TrabalhadorModel.create({nome: trabalhador.Nome, email: trabalhador.Email, sexo: trabalhador.Sexo, salario: trabalhador.Salario}) 
    } catch (err) {
      throw err
    } finally {
      sequelize.close()
    }
  }

  static async selecionarTodos(): Promise<JSON[]> {
    let sequelize = db.criarConexao()

    try {
      let dados = await TrabalhadorModel.findAll()
      let trabalhadoresJSON: JSON[] = []

      dados.forEach((trabalhador) => {
        trabalhadoresJSON.push(trabalhador.toJSON())
      })
      return trabalhadoresJSON
    } catch (err) {
      throw err
    } finally {
      sequelize.close()
    }
  }

  static async modificarTrabalhador(trabalhador: InTrabalhador): Promise<number> {
    let sequelize = db.criarConexao()

    try {
      let linhasModificadas = await TrabalhadorModel.update({
         nome: trabalhador.nome,
         email: trabalhador.email,
         sexo: trabalhador.sexo,
         salario: trabalhador.salario
      }, {
        where: {
          id: trabalhador.id
        }
      })
      
      return linhasModificadas[0]
    } catch (err) {
      throw err
    } finally {
      sequelize.close()
    }
  }

  static async deletarTrabalhador(id: number): Promise<number> {
    let sequelize = db.criarConexao()

    try {
      let linhasModificadas = await TrabalhadorModel.destroy({
        where: {
          id: id
        }
      })
      
      return linhasModificadas
    } catch (err) {
      throw err
    } finally {
      sequelize.close()
    }
  }
}