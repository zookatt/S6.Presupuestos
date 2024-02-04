import React, { useContext } from "react";
import { appContext } from "../context/appContext";


export default function EnCurso() {
  
  const totalStyle = {
    width: '50%',
    margin: '0 auto',
  };

  return (
    <div className="py-2 mt-3" style={totalStyle}>
      <div className="container text-start py-3 ">
        <div className="row align-items-start">
          <div className="col align-self-center">
            <h2 className="mb-2 align-items-start">Presupuestos en curso:</h2>
          </div>
        </div>
      </div>
    </div>
  );
}