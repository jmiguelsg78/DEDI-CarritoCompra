import React, { useState } from 'react';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';

function App() {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item, index) => index !== id));
  };

  return (
    <div>
      <header style={styles.header}>
        <h1>🎄 Catálogo Navideño 🎅</h1>
      </header>
      <main style={styles.container}>
        <Catalogo agregarAlCarrito={agregarAlCarrito} />
        <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
      </main>
    </div>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#3E8E7E',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
};

export default App;
