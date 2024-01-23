import React from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Options from "./components/Options";
import Total from "./components/Total";
import CompoContext from "./context/CompoContext";



function App() {
  
  return (
    <CompoContext>
      <div>
        <Header />
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



