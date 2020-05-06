import React from 'react';
import Header from  './details_header';
const Details=(props)=>
{
    const {movie,handleshowDetails}=props;
    console.log('in details',movie);
    return(
        <div>
            <Header movie={movie[0]} handleshowDetails={handleshowDetails}/>
        <div className='genre'>
        <h3>{movie[0].genre} Movie</h3>
        <p>{movie[0].title}</p>
    <p> Directed By {movie[0].director} </p>
    <h4>Released Year</h4>
    {movie[0].year}
       </div>
       </div>
    )
   
}

export default Details;