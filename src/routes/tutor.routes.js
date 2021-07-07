const express = require('express')
const router = express.Router()
const controller = require('../controllers/tutorController')



//Cadastra um tutor
router.post('/cadastrar', controller.criaTutor)

//Retorna todos os tutores
router.get('/', controller.mostraTutores)
//Retorna a pesquisa por animal
router.get('/animal', controller.mostraAnimal)
//Retorna a pesquisa por bairro
router.get('/bairro', controller.mostraBairro)

//Atualiza o cadastro do tutor usando como parametro o CPF
router.put('/atualizar', controller.atualizaTutor)
//Deleta o cadastro do tutor usando como parametro o CPF
router.delete('/delete', controller.deleteTutor)



module.exports = router

