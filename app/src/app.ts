import express, { Request, Response } from 'express'
import { InTrabalhador } from './interface/InTrabalhador'
import { Trabalhador } from './models/Trabalhador.js'
import { trabalhadorDAO } from './data/trabalhadorDAO.js'

const app = express()
const port = process.env.port || 8080

app.use(express.json())

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/', async (req: Request, res: Response) => {
  res.status(200).send('Página Inicial') 
})

app.post('/cadastrarTrabalhador', async (req: Request, res: Response) => {
  let auxTrabalhador: InTrabalhador = req.body

  let trabalhador = new Trabalhador(0, auxTrabalhador.nome!, auxTrabalhador.email!, auxTrabalhador.sexo!, auxTrabalhador.salario!)

  await trabalhadorDAO.cadastrar(trabalhador)

  res.status(200).send('Trabalhador cadastrado com sucesso.')
})

app.get('/selecionarTodos', async (req: Request, res: Response) => {

  let trabalhadores = await trabalhadorDAO.selecionarTodos()

  console.log(trabalhadores)

  res.status(200).send(trabalhadores) 
})

app.put('/modificarTrabalhador', async (req: Request, res: Response) => {
  let auxTrabalhador: InTrabalhador = req.body

  let linhasModificadas = await trabalhadorDAO.modificarTrabalhador(auxTrabalhador)

  res.status(200).send(`Trabalhador atualizado com sucesso.\nLinhas Modificadas: ${linhasModificadas}`)
})

app.delete('/deletarTrabalhador', async (req: Request, res: Response) => {
  let auxTrabalhador: InTrabalhador = req.body

  let linhasModificadas = await trabalhadorDAO.deletarTrabalhador(auxTrabalhador.id!)

  res.status(200).send(`Trabalhador deletado com sucesso.\nLinhas Modificadas: ${linhasModificadas}`)
})