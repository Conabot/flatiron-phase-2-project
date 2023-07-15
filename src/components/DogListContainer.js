import React from 'react'
import DogListCard from './DogListCard'
import "./styleContainer.css"

function DogListContainer({dogs}) {
  return (
    <div className='card-container'>
        {dogs.map(dog=>{
           return <DogListCard key={dog.id} cardImg={dog.image} cardBreed={dog.breed} cardAge={dog.age}/>
        })}
    </div>
  )
}

export default DogListContainer