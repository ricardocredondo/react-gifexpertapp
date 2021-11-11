import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('ramones')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('debe retornar un arreglo de imagenes y loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('ramones')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(8);
    expect(loading).toBe(false);
  });
});
