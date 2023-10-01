import React, {useState} from 'react'
import DogListCard from './DogListCard'
import "./styleContainer.css"


const url = "http://localhost:3000/dogs"

function DogListContainer({dogs, setDogs}) {

  const [likes, setLikes] = useState(1)

  const handleDeleteClick = async (id) => {
    // list of dogs
    //have an id 
    // need to change the list of dogs to match the deletion 
    const config={method : "DELETE"}

    const response = await fetch(`${url}/${id}`, config)

    const filterDogs = dogs.filter(dog => dog.id !== id)
      setDogs(filterDogs)
  }
  
 
  const handleLikeClick = async (id) => {
    const response = await fetch (`${url}/${id}`, {
      method: 'PATCH',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({likes : likes + 1}), // Increment like by 1
    })
    // Update likes in the state
    setLikes(likes + 1);
    // Find the dog in 'dogs' array and update its likes
    const updatedDogs = dogs.map(dog => {
      if (dog.id === id) {
        return {...dog, likes: dog.likes + 1}
      } else {
        return dog;
      }
    })

    // Update the dogs state to reflect the new like 
   setDogs(updatedDogs)
  }
  

  return (
    <div className='card-container'>
        {dogs.map(dog=>{
           return <DogListCard  key={dog.id} 
                                cardImg={dog.image} 
                                cardBreed={dog.breed} 
                                cardLike={dog.likes}
                                onLikeClick={() => handleLikeClick(dog.id)} 
                                onDeleteClick ={() => handleDeleteClick(dog.id)}/>
      })}
    </div>
  )
}

export default DogListContainer