import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageURL, box}) => {
    return(
        <div className='center pa3'>
          <div className='absolute mt2'>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.buttomRow, left: box.leftCol}}></div>
            <img id='hoba' width='500px' height='auto' src={imageURL} alt='test img' />
          </div>
        </div>  
    )
} 

export default FaceRecognition;