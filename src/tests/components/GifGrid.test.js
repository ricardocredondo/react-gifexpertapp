import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('Pruebas en <GifGrid />', () => {
  const categoria = 'ramones';
  const mockUseFetchGifs = useFetchGifs;
  test('debe funcionar correctamente', () => {
    mockUseFetchGifs.mockImplementation((categoria) => ({
      data: [],
      loading: true,
    }));
    const wrapper = shallow(<GifGrid categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'skdjf',
        title: 'la perra',
        url: 'http://localhost',
      },
      {
        id: 's89kdjf',
        title: 'la perra2',
        url: 'http://localhost',
      },
    ];
    mockUseFetchGifs.mockImplementation((categoria) => ({
      data: gifs,
      loading: false,
    }));
    const wrapper = shallow(<GifGrid categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
