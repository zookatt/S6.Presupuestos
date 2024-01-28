//CompoContext.jsx
import React, { useState } from "react";
import { appContext } from './appContext';
import ExtrasWeb from "../components/ExtrasWeb";

const CompoContext = ({ children }) => {
  const [total, setTotal] = useState(0); // Estado para almacenar el total
  
  const valueExtras = (count1,  count2) => {
    setTotal((prevTotal) => prevTotal +(count1 + count2) * 30);
  }

  
  const handleCheck = (precio) => {
    setTotal((prevTotal) => prevTotal + precio); //esto es total de los check de Options, sin contar extras
    
  };

  

  return (<appContext.Provider value={{ total, handleCheck, valueExtras }}>
    {children}
  </appContext.Provider>)
};

export default CompoContext;