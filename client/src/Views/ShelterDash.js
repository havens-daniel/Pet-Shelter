import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import '../Components/styles/shelterStyle.css'

const ShelterDashboard = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/api/petshelter')
        .then((res) => setPets(res.data))
        .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <div>
            <h1>Welcome to the Pet Shelter</h1>
            <Link to="/shelter/new">Add a pet to the Shelter</Link>
            <br/>
            <table>
                <tbody>
                    <tr>
                        <td><h2>Name</h2></td>
                        <td><h2>Pet Type</h2></td>
                        <td><h2>Actions</h2></td>
                    </tr>
                    {pets.sort((pzt, idx) => (pzt.petType.toLowerCase() > idx.petType.toLowerCase()) ? 1:-1).map((pet, index) => {
                        return (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td><Link to ={`/shelter/${pet._id}`}>Pet Details</Link>  ||  <Link to={`shelter/edit/${pet._id}`}>Edit Pet</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default ShelterDashboard;