import React, {useState, useEffect} from 'react';
import PetForm from '../Components/AddPetForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
// import petRoutes from '../../../server/routes/pet.routes';
// import AddPetView from './AddPetView';

const EditPetView = (props) => {
    const {id} = props;
    const [errors, setErrors] = useState([]);
    const [editpet, setEditPet] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
            axios.get(`http://localhost:8888/api/petshelter/${id}`)
            .then((res) => {
            setEditPet(res.data);
            setLoaded(true);
            })
            .catch(err => console.log(err));
        },[])

        const onSubmitHandler = (e, data) => {
            e.preventDefault();
            axios.put(`http://localhost:8888/api/petshelter/${id}`, data)
            .then(res =>{
                console.log(res)
                navigate("/")
                console.log("Submission Accepted")
            })
            .catch(err => {
                console.log("Error in Submission from Edit Page")
                console.log(err);
                const errResponse = err.response.data.errors
                console.log(errResponse);
                const errArr = [];
                for (const key of Object.keys(errResponse)){
                    // console.log(errResponse[key]);
                    errArr.push(errResponse[key].properties.message);
                }
                console.log(errArr);
                setErrors(errArr);
            });    
    }

    return (
        <div>
            <h1>Edit {editpet.name} </h1>
            <Link to="/">Go Back to the Shelter</Link>
            {loaded && 
            <PetForm 
            onSubmitHandler={onSubmitHandler} 
            tempName={editpet.name} 
            temppetType={editpet.petType} 
            tempdescription={editpet.description} 
            tempskill1={editpet.skill1} 
            tempskill2={editpet.skill2} 
            tempskill3={editpet.skill3}/>
            }
            {errors.map((err, idx) => {
                return (
                <p key={idx} style={{ color: "red" }}>{err}</p>
                )
            })}
        </div>
    )
        }
export default EditPetView;