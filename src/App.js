import React from "react";
import Parrafo from "./componets/Parrafo";
import Variables from "./componets/Variables";
import Eventos from "./componets/Eventos";
import Contador from "./componets/Contador";
import Listas from "./componets/Listas";
import Form from "./componets/Form";

function App() {
  return (
    <div className="container mt-5">
      <h1>React JS</h1>
      {/* <Parrafo />
      <Variables />
      <Eventos />
      <Contador/> 
      <Listas /> */}
      <Form />
    </div>
  );
}

export default App;
