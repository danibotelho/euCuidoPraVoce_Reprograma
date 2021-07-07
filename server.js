const app = require('./src/app')
const PORT = process.env.PORTA 


app.listen(PORT,()=>console.log(`Rodando na porta: ${PORT}`))


