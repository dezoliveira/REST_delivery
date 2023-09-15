const app = require('./src/app.js')
const connection = require('./src/db/connection.js')

const PORT = 3000

connection.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    app.listen(PORT, () => {
      console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
    })
    console.log('Conexao realizada com sucesso!')
  }
})