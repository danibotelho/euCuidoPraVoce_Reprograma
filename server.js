const app = require('./src/app')
const port =  process.env.PORT_DEV

app.listen(port,()=>console.log(`Rodando na porta: ${port}`))
