import express, { Request, Response } from 'express'

const app = express()
const port = process.env.port || 8080

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Página Inicial')
})
