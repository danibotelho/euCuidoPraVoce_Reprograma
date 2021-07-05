const mongoose = require('mongoose')
const Cuidador = require('../models/cuidador')

 
const criaCuidador = async (req, res) => {
    const cuidador = new Cuidador({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade,
        genero: req.body.genero,
        telefone: req.body.telefone,
        estado: req.body.estado,
        cidade: req.body.cidade,
        bairro:req.body.bairro,
        animal: req.body.animal,
        valorHora: req.body.valorHora,
        formaPag: req.body.formaPag,
        descricao: req.body.descricao
            
    })

    const cuidadorJaExiste = await Cuidador.findOne({cpf: req.body.cpf})
    if(cuidadorJaExiste) {
        return res.status(409).json({error: 'Cuidador já cadastrado!'})
    }

    try {
        const novoCuidador = await cuidador.save()
        res.status(201).json(novoCuidador)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
}

const mostraCuidadores = async (req, res) => {
    try {
        const cuidadores = await Cuidador.find()
        return res.status(200).send(cuidadores)
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    
 }

const mostraAnimal = async (req, res) => {

    try {
        const cuidador = await Cuidador.find({animal: req.query.animal})
        res.status(200).json(cuidador)
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    
}

const mostraBairroAnimal = async (req, res) => {

    try {
        const cuidador = await Cuidador.find({bairro: req.query.bairro}&&{animal: req.query.animal})
        res.status(200).json(cuidador)
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    
}

const mostraBairro = async (req, res) => {

    try {
        const cuidador = await Cuidador.find({bairro: req.query.bairro})
        res.status(200).json(cuidador)
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    
}


const atualizaCuidador = async (req, res)=> {
    const encontraCuidador = await Cuidador.findOne({cpf: req.query.cpf})
    if(encontraCuidador == null) {
        return res.status(404).json({message: 'Cuidador não encontrado.'})
    }
    if (req.body.nome != null) {
        encontraCuidador.nome = req.body.nome
    }
    if (req.body.telefone != null) {
        encontraCuidador.telefone = req.body.telefone
    }
    if (req.body.estado != null) {
        encontraCuidador.estado = req.body.estado
    }
    if (req.body.cidade != null) {
        encontraCuidador.cidade = req.body.cidade
    }
    if (req.body.bairro != null) {
        encontraCuidador.bairro = req.body.bairro
    } 
    if (req.body.valorHora != null) {
        encontraCuidador.valorHora = req.body.valorHora
    }       
    if (req.body.descricao != null) {
        encontraCuidador.descricao = req.body.descricao
    }
    try {        
        const cuidadorAtualizado = await encontraCuidador.save()
       res.status(200).json(cuidadorAtualizado)

    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deleteCuidador = async (req, res) => {
    const encontraCuidador = await Cuidador.findOne({cpf: req.query.cpf})
if(encontraCuidador == null) {
    return res.status(404).json({message: 'Estudio não encontrado.'})
}

try {
    await encontraCuidador.remove()
    res.status(200).json({message: 'Deletado com sucesso'})
} catch (err) {
    return res.status(400).json({message: err.message})
}

}



module.exports = { 
    criaCuidador,
    mostraCuidadores,
    mostraAnimal,
    mostraBairro,
    mostraBairroAnimal,
    atualizaCuidador,
    deleteCuidador
}

