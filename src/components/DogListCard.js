
import React from 'react';
import './StyleCard.css';

function DogListCard({cardImg, cardBreed, cardAge}) {

  return (
   <div className="card center-align">
      <img className="card-image" src={cardImg} alt={"loading.."}/>
      <h4 className='card-breed'> Breed: {cardBreed}</h4>
      <p className='card-age'>Age: {cardAge}</p>
   </div>

    
  );
}

    
export default DogListCard;