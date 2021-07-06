//const app = require('./src/app')

const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 8000
const db = require('./src/data/database')
db.connect() 

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message: 'Deploy no heroku!'})
})


app.listen(port,()=>console.log(`Rodando na porta: ${port}`))
