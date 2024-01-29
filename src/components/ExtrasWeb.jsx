//ExtrasWeb.jsx

import React, { useState, useContext } from "react";
import { appContext } from "../context/appContext";


export default function ExtrasWeb() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const { valueExtras } = useContext(appContext);

    function handleClickMinusP() {
        if (count1 > 0) {
            setCount1((prevCount1) => prevCount1 - 1);
            valueExtras(-1, 0); // Resta 30 euros al total
        }
    }

    function handleClickPlusP() {
        setCount1((prevCount1) => prevCount1 + 1);
        valueExtras(1, 0); // Anada 30 euros al total
    }

    function handleClickMinusI() {
        if (count2 > 0) {
            setCount2((prevCount2) => prevCount2 - 1);
            valueExtras(-1, 0); // Resta 30 euros al total
        }

    }

    function handleClickPlusI() {
        setCount2((prevCount2) => prevCount2 + 1);
        valueExtras(1, 0); // Anada 30 euros al total
    }

    const counterStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        paddingLeft: '15px',
        paddingRight: '15px',
        marginBottom: '5px',
        marginTop: '5px',
    }

    const plusMinusStyle = {
        backgroundColor: "white",
        border: '1px solid #ddd',
        borderRadius: '30em',
        paddingLeft: '10px',
        paddingRight: '10px',
        marginBottom: '5px',
        margin: '0px'
    }


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-end align-items-center">
                            <p className="align-self-center  my-1">Numero de paginas</p>
                            <div className="btn-group justify-content-center align-items-center mx-3">
                                <button className="btn btn-outline" style={plusMinusStyle} onClick={handleClickMinusP}>–</button>
                                <div className="counter--count mx-2" style={counterStyle} >
                                    <h1 className="fs-5 mx-2 my-1">{count1}</h1>
                                </div>
                                <button className="btn btn-outline" style={plusMinusStyle} onClick={handleClickPlusP}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mt-3">
                        <div className="d-flex justify-content-end align-items-center">
                            <p className="align-self-center  my-1">Numero de idiomas</p>
                            <div className="btn-group  justify-content-center align-items-center mx-3">
                                <button className="btn btn-outline " style={plusMinusStyle} onClick={handleClickMinusI}>–</button>
                                <div className="counter--count mx-2" style={counterStyle}>
                                    <h1 className="fs-5 mx-2 my-1">{count2}</h1>
                                </div>
                                <button className="btn btn-outline" style={plusMinusStyle} onClick={handleClickPlusI}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
