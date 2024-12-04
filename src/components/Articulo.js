import React from 'react';

function Articulo({ item, agregarAlCarrito }) {
  return (
    <div style={styles.card}>
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <p>Precio: ${item.precio}</p>
      <button onClick={() => agregarAlCarrito(item)} style={styles.boton}>
        Agregar al carrito
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  boton: {
    backgroundColor: '#3E8E7E',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Articulo;
