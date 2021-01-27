import React, {useState, useEffect} from 'react';
import {Link} from "@reach/router";
import axios from 'axios';
import AdoptButton from '../Components/AdoptButton'

const PetDetail = (props) => {

    const {id} = props;

    const [pet, setPet] =useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8888/api/petshelter/${id}`)
        .then((res) => setPet(res.data))
        .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <h1>Know a pet needing a good home?</h1>
            <h2>Details about: {pet.name}</h2>
            <Link to="/">Back to home</Link>
            <div>
                <p>Pet Type: {pet.petType}</p>
                <p>Description: {pet.description}</p>
                <h3>Skills</h3>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
                <AdoptButton id={pet._id}>Adopt {pet.name}</AdoptButton>
            </div>
        </div>
    )
}

export default PetDetail;