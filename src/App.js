import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar";
import NewDogs from './components/NewDogs';
import DogListCard from './components/DogListContainer';


function App() {
  const [page, setPage] = useState("/")
  const [dogs, setDogs] = useState([])
    

  

useEffect (() => { 
  fetch("https://minh-tran.onrender.com/dogs")
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
        <Route path="/doglistcard" element={<DogListCard dogs={dogs} setDogs={setDogs}/>} />
        <Route path="/newdogs" element={<NewDogs onAddNewDogs={onAddNewDogs} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
