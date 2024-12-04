import React from 'react';
import Articulo from './Articulo';
import items from '../data';

function Catalogo({ agregarAlCarrito }) {
  return (
    <section style={styles.catalogo}>
      <h2>Productos Disponibles</h2>
      <div style={styles.grid}>
        {items.map((item) => (
          <Articulo key={item.id} item={item} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  catalogo: {
    flex: 2,
    padding: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
  },
};

export default Catalogo;
