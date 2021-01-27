import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import AddPetView from './Views/AddPetView';
import EditPetView from './Views/EditPetView';
import ShelterDashboard from './Views/ShelterDash';
import PetDetail from './Views/PetDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <AddPetView path="shelter/new"/>
        <EditPetView path="shelter/edit/:id"/>
        <ShelterDashboard path="/"/>
        <PetDetail path="/shelter/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
