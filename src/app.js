const express = require('express')
const app = express()
const cors = require('cors')

const db = require('../src/data/database')
db.connect() 

app.use(cors())
app.use(express.json())

//usar as rotas
const cuidador = require('./routes/cuidador.routes')
app.use('/cuidador', cuidador)

module.exports = app