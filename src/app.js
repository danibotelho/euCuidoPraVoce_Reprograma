const express = require('express')
const app = express()
const cors = require('cors')

const db = require('../src/data/database')
db.connect() 

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json({messge: 'Deploy no heroku!'})
})

//usar as rotas
const cuidador = require('./routes/cuidador.routes')
app.use('/cuidador', cuidador)
const tutor = require('./routes/tutor.routes')
app.use('/tutor', tutor)

module.exports = app