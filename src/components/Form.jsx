import React, { useState, useContext } from "react";
import Info from "./Info";
import EnCurso from "./EnCurso";
import { appContext } from "../context/appContext";


export default function Form() {
    const [click, setClick] = useState(false);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [clientes, setClientes] = useState([]);

    const { count1,count2, total, optionsSelected, setOptionsSelected}  = useContext(appContext);

    const handleClick = () => {
        setClick(!click);
        console.log("Opciones seleccionadas antes de agregar cliente:", optionsSelected);
        const validOptions = optionsSelected.filter(option => option);

        const dataClientes = [
            {
                nombre: nombre,
                telefono: telefono,
                email: email,
                options: [...validOptions],
                totalCliente: total,
                count1Cliente: count1,
                count2Cliente: count2,
            },
        ];

        setClientes(prevClientes => [...prevClientes, ...dataClientes]);
        setNombre("");
        setTelefono("");
        setEmail("");
        setOptionsSelected([]); 
       console.log(clientes); 
    };
    
    

    const opStyle = {
        width: "75%",
        margin: "0 auto",
        border: "2px solid #ddd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
    };

    return (
        <>
            <div className="py-2 mt-2 container-lg">
                <div className="text-center py-3" style={opStyle}>
                    <div className="row align-items-start">
                        <div className="col align-self-start text-start mx-5">
                            <h2>Demandar presupuesto</h2>
                        </div>

                        <div className="row ms-4 my-4">
                            <div className="col-sm-6 col-md-3 ">
                                <input
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="col-sm-6 col-md-3 ">
                                <input
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput2"
                                    placeholder="Telefono"
                                />
                            </div>
                            <div className="col-sm-6 col-md-3 ">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput3"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="col-sm-6 col-md-3 ">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={handleClick}
                                    style={{
                                        backgroundColor: "#14b76e",
                                        borderColor: "#14b76e",
                                        color: "white",
                                    }}
                                >
                                    Solicitar presupuesto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {click && <EnCurso />}
                {clientes.map((cliente, index) => (
                    <Info
                        key={index}
                        nombre={cliente.nombre}
                        telefono={cliente.telefono}
                        email={cliente.email}
                        options={cliente.options}
                        totalCliente={cliente.totalCliente}
                        count1={cliente.count1Cliente} 
                        count2={cliente.count2Cliente}
                    />
                ))}
            </div>
        </>
    );
}
