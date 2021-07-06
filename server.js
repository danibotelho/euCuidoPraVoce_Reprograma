const app = require('./src/app')
const port =  process.env.PORT_DEV || process.env.PORT_PROD

app.listen(port,()=>console.log(`Rodando na porta: ${port}`))
