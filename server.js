const { connect } = require('./VoceNaoEstaSoRepository')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const maravilhosasController = require('./MaravilhosasController')
const divasController = require('./DivasController')
const servidor = express()
const PORTA = 2990

connect()
servidor.use(cors())
servidor.use(bodyParser.json())

//INICIO Rota de postar todas as maravilhosas que são as mulheres e suas histórias de abuso
  servidor.get('/maravilhosas', async (request, response) => {
    maravilhosasController.getAll()
    .then(maravilhosas => response.send(maravilhosas))
  })

  servidor.get('/maravilhosas/:id', (request, response) => {
    const id = request.params.id
    maravilhosasController.getById(id)
      .then(maravilhosa => {
        if(!maravilhosa){ // diva === null || diva === undefined
          response.sendStatus(404) // diva nao encontrada
        } else {
          response.send(maravilhosa)
        }
      })
      .catch(error => {
        if(error.name === "CastError"){
          response.sendStatus(400) // bad request - tem algum parametro errado
        } else {
          response.sendStatus(500) // deu ruim, e nao sabemos oq foi
        }
      })
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
    servidor.delete('/maravilhosas/:id',  (request, response) => {
        const id = request.params.id
        maravilhosasController.remove(id, request.body)
          .then(maravilhosas => {
            if(maravilhosas === null || maravilhosas === undefined) {
            response.sendStatus(404)  // nao encontrei a diva not found
            }else { 
          response.sendStatus(204)
            } 
          })
          .catch(error => {
              response.sendStatus(500)
          })
        })
      
        servidor.patch('/maravilhosas/:id', (request, response) => {
          const id = request.params.id
          maravilhosasController.update(id, request.body)
            .then(maravilhosa => {
              if(!maravilhosa) { response.sendStatus(404) } // nao encontrei a diva
              else { response.send(diva) } // o status default 200
            })
            .catch(error => {
              if(error.name === "MongoError" || error.name === "CastError"){
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

  servidor.get('/divas/:id', (request, response) => {
    const id = request.params.id
    divasController.getById(id)
      .then(diva => {
        if(!diva){ // diva === null || diva === undefined
          response.sendStatus(404) // diva nao encontrada
        } else {
          response.send(diva)
        }
      })
      .catch(error => {
        if(error.name === "CastError"){
          response.sendStatus(400) // bad request - tem algum parametro errado
        } else {
          response.sendStatus(500) // deu ruim, e nao sabemos oq foi
        }
      })
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
          console.log(error)
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
            response.sendStatus(404)  // nao encontrei a diva not found
            }else { 
          response.sendStatus(204)
            } 
          })
          .catch(error => {
              response.sendStatus(500)
          })
        })
      
        servidor.patch('/divas/:id', (request, response) => {
          const id = request.params.id
          divasController.update(id, request.body)
            .then(diva => {
              if(!diva) { response.sendStatus(404) } // nao encontrei a diva
              else { response.send(diva) } // o status default 200
            })
            .catch(error => {
              if(error.name === "MongoError" || error.name === "CastError"){
                response.sendStatus(400) // bad request
              } else {
                response.sendStatus(500)
              }
            })
        })

//FIM Rota de postar todas as Divas do Bem que deixaram seu contato para as Mulheres Maravilhosas entrarem em contato

servidor.listen(PORTA)
console.info(`Rodando na porta ${PORTA}`)