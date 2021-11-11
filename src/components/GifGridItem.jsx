import React from 'react';
import PropTypes from 'prop-types';
import './GifGridItem.css';

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="gifgriditem animate__animated animate__backInDown">
      <img src={url} className="gifgriditem__img" alt={title} key={id} />
      <p className="gifgriditem__text">{title}</p>
    </div>
  );
};
GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GifGridItem;
