import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddCategories.css';

const AddCategories = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategorias((cat) => [inputValue, ...cat]);
    }
  };
  return (
    <article className="add__container">
      <form onSubmit={handleSubmit} className="add__formulario">
        <input
          type="text"
          className="add__input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="buscar categoria"
        />
      </form>
    </article>
  );
};
AddCategories.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
export default AddCategories;
