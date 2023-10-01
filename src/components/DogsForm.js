import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const url = "http://localhost:3000/dogs";

function DogsForm({ onAddNewDogs}) {
  const[dogImg, setDogImg] = useState("")
  const[dogBreed, setDogBreed] = useState("")
  const [dogLikes, setDogLikes] =useState('')

  function handleBreedChange(event){
    setDogBreed(event.target.value)
  }

  function handleLikeChange(e) {
    setDogLikes(e.target.value)
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
      likes: 0,
    };
    onAddNewDogs(newDog)

  fetch (url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDog)
  }).then(r=>r.json()).then(dogsData=>{
    console.log("dogs after post: ", dogsData)
    onAddNewDogs(dogsData)
  })
    }

  return (
    <div>
      <h2 style={{color:"blue"}}>Your Dog Breed</h2>
    <form className="dog-form" onSubmit={handleSubmit}>
     
      <label htmlFor='breeds'>Type of Breed:</label>
        <input type="text" 
                id="breed" 
                value={dogBreed}
                onChange={handleBreedChange} />
    
     
      <label htmlFor="url">Images Link:</label>
        <input  type="url" 
                id="image" 
                value ={dogImg}
                placeholder="Type Url here .."
                onChange={handleDogImgChange} />
      
    
      <label htmlFor='likes'>Number of Like: </label>
          
          <input  type="text" 
                  id="likes"  
                  value={dogLikes}  
                  onChange ={handleLikeChange} />
    
   
      <button type="submit" value="submit" >Add Dog Breed to List</button>
     
    </form>
    </div>
  );
}

export default DogsForm;
