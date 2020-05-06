import React from 'react';
const Card=(props)=>
{
    const {movie,handleOnClick}=props;
  const  handleClick=()=>
    {
        handleOnClick(movie);
    }
    console.log('in card',movie);
    return(
        <div>
     
      <span >{props.movie.title}</span> 
      <button className='details'onClick={handleClick}>Details</button>
       </div>
    )
}

export default Card;