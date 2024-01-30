//Options.jsx
import React, {useState, useContext} from "react";
import { appContext } from "../context/appContext";
import ExtrasWeb from "../components/ExtrasWeb";



export default function Options({ option }) {
    
    const [check, setCheck] = useState(false);
    const { handleCheck, valueExtras} = useContext(appContext);
    


    const opStyle = {
      width: '75%',
      margin: '0 auto',
      border: `2px solid ${(check && option.nombre==="Web") ? '#14B76E' : '#ddd'}`,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    };

  
    return (
      <div className="py-2 mt-2 container-lg">
        <div className="text-center py-3" style={opStyle}>
          <div className="row align-items-start">
            <div className="col align-self-center text-start mx-5">
              <h2>{option.nombre}</h2>
              <p>{option.descripcion}</p>
            </div>
            <div className="col  align-self-center mx-4">
              <h3>{option.precio}€</h3>
            </div>
            
            <div className=" form-check col text-start align-self-center">
              <input className="form-check-input" type="checkbox"  value=""
                onChange={() => {
                  setCheck(!check);
                  {{handleCheck((check ? -option.precio : option.precio))}}
                }}
                checked={check} 
              />
              <label className=" form-check-label text-start align-self-start" > Añadir</label> {/*mb-3  ms-2 align-self-start*/}
            </div>
            {check && option.nombre === "Web" && <div className="my-3"><ExtrasWeb valueExtras={valueExtras} /></div>}
          </div>
        </div>
      </div>
    );
  }