import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar";
import DogsForm from "./components/DogsForm";
import DogListCard from './components/DogListCard';
import DogListContainer from './components/DogListContainer';




function App() {
  const [page, setPage] = useState("/")
  const [dogs, setDogs] = useState([])
    

  

useEffect (() => { 
  fetch("http://localhost:3000/dogs")
  .then(res => res.json())
  .then((dogs) => setDogs(dogs))
}, [])

  const onNewDogUpdated = (newDog) => {
    setDogs([...dogs, newDog]);
  };

  function onAddNewDogs(newDog) {
    onNewDogUpdated(newDog)
}
 
  //console.log("dogs array: ", dogs)

  
  return (
    <div className="app">
      <h1 style={{color:"red"}}>DOG BREED</h1>
        <NavBar onChangePage={setPage} />
        
      <Routes>
        <Route path="/doglistcontainer" element={<DogListContainer dogs={dogs} setDogs={setDogs}/>} />
        <Route path="/dogsform" element={<DogsForm onAddNewDogs={onAddNewDogs} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
