import React, { useContext } from "react";
import { appContext } from "../context/appContext";


export default function Total() {
  const { total } = useContext(appContext); 
 
  const totalStyle = {
    width: '50%',
    margin: '0 auto',
  };

  return (
    <div className="py-2 mt-3" style={totalStyle}>
      <div className="container text-end py-3 ">
        <div className="row align-items-end">
          <div className="col align-self-center">
            <h2 className="mb-2">Precio presupuestado: {total}€</h2>
          </div>
        </div>
      </div>
    </div>
  );
}