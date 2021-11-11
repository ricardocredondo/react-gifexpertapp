import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategories from '../../components/AddCategories';
describe('Pruebas en <AddCategories />', () => {
  const setCategorias = jest.fn();
  let wrapper = shallow(<AddCategories setCategorias={setCategorias} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategories setCategorias={setCategorias} />);
  });
  test('debe funcionar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe cambiar el input', () => {
    const value = 'hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });
  test('NO debe postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategorias).not.toHaveBeenCalled();
  });
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategorias).toHaveBeenCalled();
    expect(setCategorias).toHaveBeenCalledTimes(1);
    expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
