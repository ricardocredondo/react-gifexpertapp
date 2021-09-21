import React, { useState } from 'react';
import AddCategories from './AddCategories';
import GifGrid from './GifGrid';
import './GifExpertApp.css';

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([]);
  return (
    <div className="container">
      <header className="gifexpert__header">
        <h1 className="gifexpert__titulo">GifExpertApp</h1>
      </header>
      <main className="gifexpert__main">
        <AddCategories setCategorias={setCategorias} />
        <article className="gifgrid__container">
          {categorias.map((categoria) => (
            <GifGrid categoria={categoria} key={categoria} />
          ))}
        </article>
      </main>
    </div>
  );
};

export default GifExpertApp;
