const PetController = require("../controllers/pet.controller");


module.exports=function(app) {

    app.get('/api/petshelter', PetController.getAllPets);
    app.get('/api/petshelter/:id', PetController.getOnePet);
    app.post('/api/petshelter', PetController.createPet);
    app.put('/api/petshelter/:id', PetController.updatePet);
    app.delete('/api/petshelter/:id', PetController.deletePet);
}