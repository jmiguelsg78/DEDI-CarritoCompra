import React from 'react';

const Carrito = ({ carrito, eliminarDelCarrito }) => {
  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              {item.nombre} - ${item.precio.toFixed(2)}
              <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
