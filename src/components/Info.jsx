import React from "react";



export default function Info({ nombre, telefono, email, options, totalCliente, count1, count2 }) {

  
    const opStyle = {
        width: '75%',
        margin: '0 auto',
        border: '2px solid #ddd',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    };


    return (

        <div className="py-2 mt-2 container-lg mt-4">
            <div className="text-center py-3" style={opStyle}>

                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col text-start ms-4">
                            <h2>{nombre}</h2>
                            <p>{email}</p>
                            <p>{telefono}</p>
                        </div>
                        <div className="col">
                            <h5>Servicios contratados:</h5>

                            <ul className="text-start bolder">
                                {options.map((option, index) => (
                                    <li key={index} style={{fontWeight: "bold"}}>{option === "Web" ? `Web (${count1} paginas, ${count2} idiomas)` : option}</li>
                                ))}
                            </ul>
                            
                        </div>
                        <div className="col">
                            <h5>Total:</h5>
                            <h4>{totalCliente}</h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );

}