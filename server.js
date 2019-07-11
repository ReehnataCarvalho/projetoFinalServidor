const http = require("http")
const express = require("express")
// const cors = require('cors')
// const bodyParser = require('body-parser')


const PORTA = 3000
const servidor = express()
// servidor.use(cors())
// servidor.use(bodyParser.json())


// Rota de postar todas as Divas do Bem
servidor.post('/divas', (request, response) => {
  response.send('Olá, mundo!')
})

// servidor.get('/', (request, response) => {
//     response.send('Olá, mundo!')
//   })


//   servidor.patch('/', (request, response) => {
//     response.send('Olá, mundo!')
//   })

//   servidor.delete('/', (request, response) => {
//     response.send('Olá, mundo!')
//   })

servidor.listen(PORTA)
console.info(`Rodando na porta ${PORTA}`)