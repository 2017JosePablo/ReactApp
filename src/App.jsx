import React from "react";
import Parrafo from "./componets/Parrafo";
import Variables from "./componets/Variables";
import Eventos from "./componets/Eventos";
import Contador from "./componets/Contador";
import Listas from "./componets/Listas";
import Form from "./componets/Form";
import Crud from "./componets/Crud";
import Saludo from "./componets/Saludo";
import Comentario from "./componets/Comentario";

function App() {
  return (
    <div className="container mt-5">
      <h1>React JS</h1>
      {/* <Parrafo />
      <Variables />
      <Eventos />
      <Contador/> 
      <Listas />
      <Form />
      <Crud />*/}
      <Saludo persona='pcarranza' edad={24} />
      <hr/>
      <h3>Cajita de comentarios</h3>
      <Comentario 
        url='https://picsum.photos/64'
        nombre='John Doe'
        posted='February 19, 2021'
        comentario='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <Comentario 
        url='https://picsum.photos/64'
        nombre='José'
        posted='January 10, 2016'
        comentario='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <Comentario 
        url='https://picsum.photos/64'
        nombre='Juan'
        posted='February 19, 2016'
        comentario='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <Comentario 
        url='https://picsum.photos/64'
        nombre='Martin'
        posted='February 19, 2016'
        comentario='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    </div>
  );
}

export default App;
