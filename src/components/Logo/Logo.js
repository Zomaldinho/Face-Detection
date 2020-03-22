import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import face from './face.png'

const Logo = () => {
    return(
        <div className='ma4 nt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                <div className ="Tilt-inner"> <img src={face} alt='logo'/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;