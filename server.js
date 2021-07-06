const express = require('express')
const app = express()
const cors = require('cors')
const routerCuidador = require('./src/routes/cuidador.routes')

const port = process.env.PORT || 8000
const db = require('./src/data/database')
db.connect() 

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message: 'Deploy no heroku!'})
})

app.post('/cadastrar' ,routerCuidador.post)

const cuidador = require('./src/routes/cuidador.routes')
app.use('/cuidador', cuidador)

const tutor = require('./src/routes/tutor.routes')
app.use('/tutor', tutor)


app.listen(port,()=>console.log(`Rodando na porta: ${port}`))


