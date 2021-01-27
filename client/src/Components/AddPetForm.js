import React, {useState} from 'react';

const PetForm = (props) => {
    const {onSubmitHandler, 
    tempName,
    temppetType,
    tempdescription,
    tempskill1,
    tempskill2,
    tempskill3,
    } = props;

const [name,setname] = useState(tempName);
const [petType, setpetType] = useState(temppetType);
const [description, setdescription] = useState(tempdescription);
const [skill1, setskill1] = useState(tempskill1);
const [skill2, setskill2] = useState(tempskill2);
const [skill3, setskill3] = useState(tempskill3);

return (
    <div>
        <form onSubmit = {(e) => {
            onSubmitHandler (e, {
                name,
                petType,
                description,
                skill1,
                skill2,
                skill3
            })
        }}>
            <div>
                <label>Pet Name: </label>
                <input type="text" name="name" value={name} onChange={e =>{setname(e.target.value)}}/>
            </div>
            <div>
                <label>Pet Type: </label>
                <input type="text" name="petType" value={petType} onChange={e =>{setpetType(e.target.value)}}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" value={description} onChange={e =>{setdescription(e.target.value)}}/>
            </div>
            <div>
                <label>Skill One: </label>
                <input type="text" name="skill1" value={skill1} onChange={e =>{setskill1(e.target.value)}}/>
            </div>
            <div>
                <label>Skill Two: </label>
                <input type="text" name="skill2" value={skill2} onChange={e =>{setskill2(e.target.value)}}/>
            </div>
            <div>
                <label>Skill Three: </label>
                <input type="text" name="skill3" value={skill3} onChange={e =>{setskill3(e.target.value)}}/>
            </div>
            <input type="submit"/>
            
        </form>
    </div>
)
    }

export default PetForm;
