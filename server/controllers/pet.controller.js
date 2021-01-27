const { response } = require('express');
const {Pet} = require('../models/pet.model');


module.exports.createPet = (request, response) => {
    const {name, petType, description, skill1, skill2, skill3} = request.body;
    Pet.create({
        name,
        petType,
        description,
        skill1,
        skill2,
        skill3
    })
    .then(Pet => response.json(Pet))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllPets = (request,response) => {
    Pet.find({})
    .then(Pet => response.json(Pet))
    .catch(err => res.status(400).json(err));
}

module.exports.getOnePet = (req,res) => {
    Pet.findOne({_id: req.params.id}) 
    .then(detail => res.json(detail))
    .catch(err => res.json(err));
}

module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
    .then(edit => res.json(edit))
    .catch(err => res.status(400).json(err));
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.status(400).json(err))
}