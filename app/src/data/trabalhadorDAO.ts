import { Trabalhador } from '../models/Trabalhador.js'
import { TrabalhadorModel } from './models/TrabalhadorModel.js'

export class trabalhadorDAO {
  static async cadastrar(trabalhador: Trabalhador): Promise<void> {
    try {
      await TrabalhadorModel.create({nome: trabalhador.Nome, email: trabalhador.Email}) 
      console.log(`${trabalhador.Nome} cadastrado com sucesso.`)
    } catch (err) {
      throw err
    }
  }
}