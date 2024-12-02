import React from 'react';
import Articulo from './Articulo';
import articulos from '../data';

const Catalogo = ({ agregarAlCarrito }) => {
  return (
    <div className="catalogo">
      {articulos.map((articulo) => (
        <Articulo key={articulo.id} articulo={articulo} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </div>
  );
};

export default Catalogo;
