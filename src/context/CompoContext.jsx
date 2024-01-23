//este componente es un proveedor que va a estar disponible para todos los componentes
import React, {useState} from "react";
import { appContext } from './appContext';

const CompoContext = ({ children }) => {
  const [total, setTotal] = useState(0); // Estado para almacenar el total

  const handleCheck = (precio) => {
    setTotal((prevTotal) => prevTotal + precio);
  };

  return (<appContext.Provider value={{ total, handleCheck }}>
    {children}
  </appContext.Provider>)
};

export default CompoContext;
