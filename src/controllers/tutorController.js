const mongoose = require('mongoose')
const Tutor = require('../models/tutor')

 
const criaTutor = async (req, res) => {
    const tutor = new Tutor({
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
        qntsDias: req.body.qntsDias,
        descricao: req.body.descricao
            
    })

    const tutorJaExiste = await Tutor.findOne({cpf: req.body.cpf})
    if(tutorJaExiste) {
        return res.status(409).json({error: 'O CPF informado já está cadastrado!'})
    }

    try {
        const novoTutor = await tutor.save()
        res.status(201).json(novoTutor)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
}

const mostraTutores = async (req, res) => {
    try {
        const tutores = await Tutor.find()
        return res.status(200).send(tutores)
    } catch (err){
        return res.status(404).json({message: err.message})
    }
    
 }

const mostraAnimal = async (req, res) => {

    try {
        const tutor = await Tutor.find({animal: req.query.animal})
        res.status(200).json(tutor)
    } catch (err){
        return res.status(404).json({message: err.message})
    }
    
}


const mostraBairro = async (req, res) => {

    try {
        const tutor = await Tutor.find({bairro: req.query.bairro})
        res.status(200).json(tutor)
    } catch (err){
        return res.status(404).json({message: err.message})
    }
    
}


const atualizaTutor = async (req, res)=> {
    const encontraTutor = await Tutor.findOne({cpf: req.query.cpf})
    if(encontraTutor == null) {
        return res.status(404).json({message: 'Cadastro não encontrado.'})
    }
    if (req.body.nome != null) {
        encontraTutor.nome = req.body.nome
    }
    if (req.body.telefone != null) {
        encontraTutor.telefone = req.body.telefone
    }
    if (req.body.estado != null) {
        encontraTutor.estado = req.body.estado
    }
    if (req.body.cidade != null) {
        encontraTutor.cidade = req.body.cidade
    }
    if (req.body.bairro != null) {
        encontraTutor.bairro = req.body.bairro
    } 
    if (req.body.qntsDias != null) {
        encontraTutor.qntsDias = req.body.qntsDias
    }  
    if (req.body.animal != null) {
        encontraTutor.animal = req.body.animal
    }      
    if (req.body.descricao != null) {
        encontraTutor.descricao = req.body.descricao
    }
    try {        
        const tutorAtualizado = await encontraTutor.save()
       res.status(200).json(tutorAtualizado)

    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deleteTutor = async (req, res) => {
    const encontraTutor = await Tutor.findOne({cpf: req.query.cpf})
if(encontraTutor == null) {
    return res.status(404).json({message: 'Cadastro não encontrado.'})
}

try {
    await encontraCuidador.remove()
    res.status(200).json({message: 'Cadastro Deletado'})
} catch (err) {
    return res.status(400).json({message: err.message})
}

}



module.exports = { 
    criaTutor,
    mostraTutores,
    mostraAnimal,
    mostraBairro,
    atualizaTutor,
    deleteTutor
}

