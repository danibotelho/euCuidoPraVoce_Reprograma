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



module.exports = app