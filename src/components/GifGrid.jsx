import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import './GifGrid.css';

const GifGrid = ({ categoria }) => {
  const { data, loading } = useFetchGifs(categoria);
  return (
    <section className="gifgrid__categoria">
      <h3 className="gifgrid__titulo">{categoria}</h3>
      {loading && <p>Loading</p>}
      <div className="gifgrid_contenedor-imagen">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </section>
  );
};
GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired,
};
export default GifGrid;
