import React from 'react';

const Articulo = ({ articulo, agregarAlCarrito }) => {
  return (
    <div className="articulo">
      <h3>{articulo.nombre}</h3>
      <p>{articulo.descripcion}</p>
      <p><strong>Precio:</strong> ${articulo.precio.toFixed(2)}</p>
      <button onClick={() => agregarAlCarrito(articulo)}>Añadir al carrito</button>
    </div>
  );
};

export default Articulo;
