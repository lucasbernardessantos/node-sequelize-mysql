import { Sequelize } from "sequelize"

let sequelize = new Sequelize('trabalhadores', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log(`Conexão entre o banco e a aplicação bem sucedida.`)
  })
  .catch((err) => {
    console.log(`Erro na conexão com o banco. ${err}.`)
  })

export{ sequelize }