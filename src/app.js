const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./data/database')
const cuidador = require('./routes/cuidador.routes')
const tutor = require('./routes/tutor.routes')

app.use(cors())
app.use(express.json())
db.connect() 

app.use('/cuidador', cuidador)
app.use('/tutor', tutor)

app.get('/', async (req,res) => {
    res.json({
    "name": "eu_cuido_pra_voce",
    "version": "1.0.0",
    "description": "Sistema que liga tutores de animais que por algum motivo precisam de um cuidador para o seu bichinho."
})
})

module.exports = app