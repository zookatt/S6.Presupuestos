//Options.jsx
import React, {useState, useContext} from "react";
import { appContext } from "../context/appContext";
import ExtrasWeb from "../components/ExtrasWeb";


export default function Options({ option }) {
    
    const [check, setCheck] = useState(false);
    const { handleCheck, valueExtras} = useContext(appContext);
    


    const opStyle = {
      width: '50%',
      margin: '0 auto',
      border: `1px solid ${(check && option.nombre==="Web") ? '#14B76E' : '#ddd'}`,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    };
  
    return (
      <div className="py-2 mt-2">
        <div className="container text-center py-3" style={opStyle}>
          <div className="row align-items-start">
            <div className="col align-self-center text-start mx-3">
              <h3>{option.nombre}</h3>
              <p>{option.descripcion}</p>
            </div>
            <div className="col align-self-center">
              <h2>{option.precio}€</h2>
            </div>
            <div className="col align-self-center">
              <input
                onChange={() => {
                  setCheck(!check);
                  {{handleCheck((check ? -option.precio : option.precio))}}
                }}
                checked={check}
                type="checkbox"
              />
              <span className="mb-2"> Añadir</span>
              {check && option.nombre === "Web" && <ExtrasWeb valueExtras={valueExtras} />}
            </div>
          </div>
        </div>
      </div>
    );
  }