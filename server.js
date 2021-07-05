const app = require('./src/app')
var PORT = 8080

app.listen(PORT,(request,response)=>{
    console.log(`Rodando na porta: ${PORT}`)
})