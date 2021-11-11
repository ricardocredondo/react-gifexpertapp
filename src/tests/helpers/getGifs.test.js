import { getGifs } from '../../helpers/getGifs';
describe('Pruebas en getGifs', () => {
  test('debe traer 10 elementos', async () => {
    const categoria = 'ramones';
    const numeroElementos = 8;
    const gifs = await getGifs('ramones');
    expect(gifs.length).toBe(numeroElementos);
  });
  test('a getGifs no se le pasa ninguna categoria', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(10);
  });
});
