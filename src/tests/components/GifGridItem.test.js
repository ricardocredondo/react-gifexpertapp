import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
describe('Pruebas en <GifGridItem />', () => {
  const [id, title, url] = [
    'alskdjf443j',
    'la perra vieja',
    'http://localhost',
  ];
  const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);
  test('debe mostrar <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('el elemento img debe tener la clase gifgriditem__img', () => {
    const clase = 'gifgriditem__img';
    const claseElemento = wrapper.find('img').hasClass(clase);
    expect(claseElemento).toBe(true);
  });
  test('la imagen debe tener atributos src y alt igual url y title respectivamente', () => {
    const img = wrapper.find('img');
    const src = img.prop('src');
    const alt = img.prop('alt');
    const key = img.key();
    expect(src).toBe(url);
    expect(alt).toBe(title);
    expect(key).toBe(id);
  });

  test('debe mostrar un parrafo con title', () => {
    const parrafo = wrapper.find('p').text();
    expect(parrafo).toBe(title);
  });
});
