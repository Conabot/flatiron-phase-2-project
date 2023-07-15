import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const url = "http://localhost:3000/dogs";

function NewDogs({ onAddNewDogs}) {
  const[dogImg, setDogImg] = useState("")
  const[dogBreed, setDogBreed] = useState("")
  const [dogAge, setDogAge] =useState('')

  function handleBreedChange(event){
    setDogBreed(event.target.value)
  }

  function handleAgeChange(e) {
    setDogAge(e.target.value)
  }

  function handleDogImgChange(e) {
    setDogImg(e.target.value)
  }

    function handleSubmit(e){
    e.preventDefault(e)
    const newDog = {
      id: Number(uuid()), 
      breed: dogBreed,
      image: dogImg,
      age: dogAge,
    };
    onAddNewDogs(newDog)

  fetch (url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDog)
  }).then(r=>r.json()).then(dogsData=>{
    console.log("questions after post: ", dogsData)
    onAddNewDogs(dogsData)
  })
    }

  return (
    <div>
    <form className="newdogs" onSubmit={handleSubmit}>
     
      <label htmlFor='breeds'>Breed:</label>
        <input type="text" 
                id="breed" 
                value={dogBreed}
                onChange={handleBreedChange} />
    
     
      <label htmlFor="url">Images:</label>
        <input  type="url" 
                id="image" 
                value ={dogImg}
                placeholder="Type Url here .."
                onChange={handleDogImgChange} />
      
    
      <label htmlFor='age'>Age: </label>
          
          <input  type="text" 
                  id="age"  
                  value={dogAge}  
                  onChange ={handleAgeChange} />
    
   
      <button type="submit">Add Dog Breed to List</button>
     
    </form>
    </div>
  );
}

export default NewDogs;
