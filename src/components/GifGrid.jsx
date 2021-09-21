import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import './GifGrid.css';

const GifGrid = ({ categoria }) => {
  const { data: images, loading } = useFetchGifs(categoria);
  return (
    <section className="gifgrid__categoria">
      <h3 className="gifgrid__titulo">{categoria}</h3>
      {loading && <p>Loading</p>}
      <div className="gifgrid_contenedor-imagen">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </section>
  );
};

export default GifGrid;
