//ExtrasWeb.jsx

import React, { useState, useContext } from "react";
import { appContext } from "../context/appContext";


export default function ExtrasWeb() {
    
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    
    const { valueExtras } = useContext(appContext);


    function handleChangeNumWebs(event) {
        const newValue = parseInt(event.target.value);
        setCount1(newValue);
        valueExtras(newValue - count1, 0); 
    }

    function handleChangeNumIdiomas(event) {
        const newValue = parseInt(event.target.value);
        setCount2(newValue);
        valueExtras(0, newValue - count2); 
    }

    return (
        <>
            <div className="col align-self-center">
                <label htmlFor="numWebs">Numero de Paginas</label>
                <input type="number" value={count1} onChange={handleChangeNumWebs} />
            </div>
            <div className="col align-self-center">
                <label htmlFor="numIdiomas">Numero de Idiomas</label>
                <input type="number" value={count2} onChange={handleChangeNumIdiomas} />
            </div>
        </>
    );
}
