import React from "react";
import data from "./data/data.json";
import Banner from "./components/banner";
import Options from "./components/Options";
import Total from "./components/Total";
import CompoContext from "./context/CompoContext";



function App() {
  
  return (
    <CompoContext>
      <div>
        <Banner />
        {data.options.map(option => (
          <Options key={option.nombre} option={option} />
        ))}
        <Total />
      </div>
    </CompoContext>
  );
}

export default App;



