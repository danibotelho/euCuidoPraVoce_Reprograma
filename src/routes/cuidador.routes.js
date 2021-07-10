const express = require('express')
const router = express.Router()
const controller = require('../controllers/cuidadorController')

//Cadastra um Cuidador
router.post('/cadastrar', controller.criaCuidador)

//Retorno todos os cuidadores
router.get('/', controller.mostraCuidadores)
//Retorna a pesquisa por animal
router.get('/animal', controller.mostraAnimal)
//Retorna a pesquisa por bairro
router.get('/bairro', controller.mostraBairro)
//Retorna a pesquisa por animal e bairro
router.get('/bairroAnimal', controller.mostraBairroAnimal)
//Retorna um match entre tutores e cuidadores
router.get('/match', controller.matchBairroAnimal)

//Atualiza o cadastro do cuidador usando como parametro o CPF
router.patch('/atualizar', controller.atualizaCuidador)

//Deleta o cadastro do cuidador usando como parametro o CPF
router.delete('/delete', controller.deleteCuidador)

module.exports = router

