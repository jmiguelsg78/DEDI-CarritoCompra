import React from 'react';

function Carrito({ carrito, eliminarDelCarrito }) {
  return (
    <aside style={styles.carrito}>
      <h2>🛒 Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((item, index) => (
            <li key={index} style={styles.item}>
              <span>{item.nombre} - ${item.precio}</span>
              <button onClick={() => eliminarDelCarrito(index)} style={styles.botonEliminar}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

const styles = {
  carrito: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#F5F5F5',
    borderRadius: '5px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  botonEliminar: {
    backgroundColor: '#E63946',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Carrito;
