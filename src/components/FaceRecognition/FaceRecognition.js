import React from 'react';

const FaceRecognition = ({imageURL}) => {
    return(
        <div className='center pa3'>
          <img src={imageURL} alt='test img' />
        </div>  
    )
} 

export default FaceRecognition;