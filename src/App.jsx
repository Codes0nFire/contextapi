import { useContext, useState } from 'react'

import './App.css'
import { todocontext } from './Context/Context';
import Hero from './Components/Hero';



function App() {
  
  const [tasks, settasks]= useContext(todocontext);
 

  


  return (
  <div>
     {tasks.map((elem,index)=> <h1 key={index} >{elem.title}</h1> )}
     <Hero/>
  </div>
  )
}
 
export default App
