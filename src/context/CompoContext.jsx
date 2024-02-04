//CompoContext.jsx
import React, { useState } from "react";
import { appContext } from './appContext';


const CompoContext = ({ children }) => {
  const [total, setTotal] = useState(0); // Estado para almacenar el total
  const [optionsSelected, setOptionsSelected] = useState([]);// Estado para almacenar opciones seleccionadas
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  

  const optionsCheck =(nombre)=>{
   optionsSelected.push(nombre)
   setOptionsSelected(optionsSelected);
  }


  const valueExtras = (count1,  count2) => {
    setTotal((prevTotal) => prevTotal +(count1 + count2) * 30);
  }

  
  const handleCheck = (precio) => {
    setTotal((prevTotal) => prevTotal + precio); //esto es total de los check de Options, sin contar extras
    
  };
  

  return (<appContext.Provider value={{count1, count2, setCount1, setCount2, total, handleCheck, valueExtras, optionsCheck, optionsSelected, setOptionsSelected}}>
    {children}
  </appContext.Provider>)
};

export default CompoContext;