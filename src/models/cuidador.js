// id: autogerado e obrigatorio
// nome: texto e obrigatorio
// cpf: texto e obrigatorio
// idade: texto e obrigatorio
// genero: texto e obrigatorio 
// telefone: texto e obrigatorio
// estado: texto e obrigatorio
// cidade: texto e obrigatorio
// bairro:texto e obrigatorio
// animaisAfinidade: texto e obrigatorio
// valorHora: number, obrigatorio
// formaPag: texto, obrigatorio
// descricao: texto e obrigatorio
// criadoEm: data gerada automaticamente e obrigatório


const mongoose = require('mongoose')
const cuidadorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: true
    },   
    cpf: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },    
    telefone: {  
        type: String,
        required: true  
    },
    animal: {
        type: String,
        required: true
    },
    valorHora: {
        type: Number,
        required: true
    },
    formaPag: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('cuidadors', cuidadorSchema )