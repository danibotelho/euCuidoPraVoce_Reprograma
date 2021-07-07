const app = require('./src/app')
const port = process.env.PORTA || 8000


app.listen(port,()=>console.log(`Rodando na porta: ${port}`))


