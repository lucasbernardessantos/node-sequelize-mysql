import express, { Request, Response } from 'express'
import swaggerUi from "swagger-ui-express"

import { InTrabalhador } from './interface/InTrabalhador'
import { Trabalhador } from './models/Trabalhador.js'
import { trabalhadorDAO } from './data/trabalhadorDAO.js'

import swaggerDocs from "./swagger.json"

const app = express()
const port = process.env.port || 8080

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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

  res.status(200).send(trabalhadores) 
})

app.put('/modificarTrabalhador', async (req: Request, res: Response) => {
  let auxTrabalhador: InTrabalhador = req.body

  let linhasModificadas = await trabalhadorDAO.modificarTrabalhador(auxTrabalhador)

  res.sendStatus(200).send(linhasModificadas)
  //res.status(200).send(linhasModificadas)
})

app.delete('/deletarTrabalhador', async (req: Request, res: Response) => {
  let auxTrabalhador: InTrabalhador = req.body

  let linhasModificadas = await trabalhadorDAO.deletarTrabalhador(auxTrabalhador.id!)

  res.status(200).send(`Trabalhador deletado com sucesso.\nLinhas Modificadas: ${linhasModificadas}`)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})