const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const maravilhosasController = require('./MaravilhosasController')
const divasController = require('./DivasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())
const PORTA = 3990

//INICIO Rota de postar todas as maravilhosas que são as mulheres e suas histórias de abuso
servidor.get('/maravilhosas', async (request, response) => {
  maravilhosasController.getAll()
  .then(maravilhosas => response.send(maravilhosas))
})

 servidor.post('/maravilhosas', (request, response) => {
  maravilhosasController.add(request.body)
    .then(maravilhosas => {
      const _id = maravilhosas._id
      response.send(_id)
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
  })
//FIM Rota de postar todas as maravilhosas que são as mulheres e suas histórias de abuso

// INICIO de postar todas as Divas do Bem que deixaram seu contato para as Mulheres Maravilhosas entrarem em contato

servidor.get('/divas', async (request, response) => {
  divasController.getAll()
  .then(divas => response.send(divas))
})

 servidor.post('/divas', (request, response) => {
  divasController.add(request.body)
    .then(divas => {
      const _id = divas._id
      response.send(_id)
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
  })
  servidor.delete('/divas/:id',  (request, response) => {
      const id = request.params.id
      divasController.remove(id, request.body)
        .then(divas => {
          if(divas === null || divas === undefined) {
          response.sendStatus(404)  // nao encontrei a comida not found
          }else { 
         response.sendStatus(204)
          } 
        })
        .catch(error => {
            response.sendStatus(500)
        })
      })

//FIM Rota de postar todas as Divas do Bem que deixaram seu contato para as Mulheres Maravilhosas entrarem em contato

servidor.listen(PORTA)
console.info(`Rodando na porta ${PORTA}`)