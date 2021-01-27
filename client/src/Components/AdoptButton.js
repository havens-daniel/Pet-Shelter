import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const AdoptButton = (props) => {

    const {id} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8888/api/petshelter/${id}`)
        .then(res => {
            navigate('/');
            console.log(res);
        })
        .catch(err => console.log(err));
    }
    return (
        <button onClick={onClickHandler}>
            Adopt
        </button>
    )
}

export default AdoptButton;