import express, { Request, Response } from 'express'
import { InTrabalhador } from './interface/InTrabalhador'
import { Trabalhador } from './models/Trabalhador.js'
import { trabalhadorDAO } from './data/trabalhadorDAO.js'
const db = require('./data/db.js')

const app = express()
const port = process.env.port || 8080

app.use(express.json())

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/', async (req: Request, res: Response) => {
  res.status(200).send('Página Inicial') 
})

app.post('/cadastrarTrabalhador', (req: Request, res: Response) => {
  let auxTrabalhador: InTrabalhador = req.body

  let trabalhador = new Trabalhador(0, auxTrabalhador.nome!, auxTrabalhador.email!)

  trabalhadorDAO.cadastrar(trabalhador)

  res.status(201).send('Trabalhador cadastrado com sucesso.')
})