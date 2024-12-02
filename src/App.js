import React, { useState } from 'react';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import './App.css';

const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (articulo) => {
    setCarrito([...carrito, articulo]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Catálogo Navideño</h1>
      <Catalogo agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </div>
  );
};

export default App;
