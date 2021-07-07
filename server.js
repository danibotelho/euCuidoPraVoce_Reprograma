const app = require('./src/app')
const PORT = process.env.PORTA || 8000


app.listen(PORT,()=>console.log(`Rodando na porta: ${PORT}`))


