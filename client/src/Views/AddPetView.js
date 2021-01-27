import React, {useState} from 'react';
import AddPetForm from '../Components/AddPetForm';
import {Link, navigate} from '@reach/router'
import axios from 'axios';

const AddPetView = (props) => {
    const [errors, seterrors] = useState([]);

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post('http://localhost:8888/api/petshelter', data)
        .then(res => {
            navigate('/')
            console.log("Submission Accepted")
        })
        .catch(err => {
            console.log("Error in Submission")
            console.log(err)
            const errResponse = err.response.data.errors;
            console.log(errResponse);
            const errArr = [];
            for (const key of Object.keys(errResponse)){
                console.log(errResponse[key]);
                errArr.push(errResponse[key].properties.message);
            }
            console.log(errArr);
            seterrors(errArr);
        });    
    }
    return (
        <div>
            <h1>Add an Adoptable Pet to the Shelter.</h1>
            <Link to="/">Return to Shelter Home</Link>
            <AddPetForm onSubmitHandler={onSubmitHandler} tempname="" temppetType = "" tempdescription="" tempskill1="" tempskill2="" tempskill3=""/>
            {errors.map((err, idx) => {
                return (
                    <p key={idx} style = {{color: "red"}}>{err}</p>
                )
            })}
        </div>
    )
}
export default AddPetView;