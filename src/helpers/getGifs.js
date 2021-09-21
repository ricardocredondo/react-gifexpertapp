  export const getGifs = async (categoria) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=zqVLXzB6OO1NpOn1ncwoZp5a27DI1Ydb&q=${encodeURI(
      categoria
    )}&limit=8&offset=0&rating=g&lang=en`
  );
  const { data } = await res.json();

  const datos = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return {
        id,
        title,
        url,
      };
    }
  );
  return datos;
};
