const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required:[true,
        "Pet's Name is required"
        ],
        minlength: [
            3,
            "Pet Name must be at least 3 characters in length"
        ]
    },
    petType:{
        type: String,
        required: [
            true,
            "Tell us the type of pet you have"
        ],
        minlength: [
            3,
            "Pet type should be at least 3 characters in length"
        ]
    },
    description:{
        type: String,
        required: [
            true,
            "We need a description of the pet"
        ],
        minlength: [
            10,
            "Describe you pet in 10 or more characters"
        ]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
 }, {timestamps: true});

    module.exports.Pet = mongoose.model("Pet", PetSchema);