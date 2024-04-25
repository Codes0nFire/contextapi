import React, { createContext } from 'react'
import { useState } from 'react';

export const todocontext=createContext(null);
export const herocontext=createContext(null);

const Context = (props) => {
  const [tasks, settasks] = useState([{ title: "Task 1", completed: false }]);
  const [hero,sethero] = useState("spoiderman");

  return (
    <todocontext.Provider value={[tasks, settasks]}>

      <herocontext.Provider value={[hero,sethero]}>
      {props.children}
      </herocontext.Provider>
      
    </todocontext.Provider>

    
  )
}

export default Context

