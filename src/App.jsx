import React from "react";
import data from "./data/data.json";
import Banner from "./components/banner";
import Options from "./components/Options";
import Total from "./components/Total";
import CompoContext from "./context/CompoContext";
import Form from "./components/Form";
import EnCurso from "./components/EnCurso";

function App() {
  
  return (
    <CompoContext>
      <Banner/>
      <div>
        {data.options.map(option => (
          <Options key={option.nombre} option={option}  />
        ))}
        <Total />
        <Form/>
      </div>
    </CompoContext>
  );
}

export default App;



