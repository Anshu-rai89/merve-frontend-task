import React from 'react';

const Header=(props)=>
{
    const {movie,handleshowDetails}=props;

   const handleDelte=()=>
    {
         fetch(`http://localhost:9000/api/v1/movie/delete/${movie._id}`,{
             method:'delete'
         }).then(response=>response.json())
         .then(data=>console.log(data));
         handleshowDetails();
    }

    const handleClose=()=>
    {
         handleshowDetails();
    }
    return(
        <div className='header'>.
        <button className='close' onClick={handleClose}><i class="material-icons">close</i> </button>
            <span className='title'>Details</span>
           <button className='delete' onClick={handleDelte}><i class="material-icons">delete</i> </button> 
        </div>
    )
}

export default Header;