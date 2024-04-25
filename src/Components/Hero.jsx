import React, { useContext } from 'react'
import { herocontext } from '../Context/Context'

const Hero = () => {

    const [hero,sethero]=useContext(herocontext);
    
  return (
    <div>
     <h1>{hero}</h1> 
    </div>
  )
}

export default Hero
