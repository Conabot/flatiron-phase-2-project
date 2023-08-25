
import React from 'react';
import './StyleCard.css';



function DogListCard({cardImg, cardBreed, cardLike, onDeleteClick, onLikeClick}) {

  return (
   <div className="card center-align">
      <h4 className='card-breed'>{cardBreed}</h4>
      <img className="card-image" src={cardImg} alt={"loading.."}/>
      <button className='like-btn' onClick={onLikeClick} >❤️  {cardLike}</button>
      <button className='del-btn' onClick ={onDeleteClick}>Delete</button> 
   </div>
  );
}

    
export default DogListCard;