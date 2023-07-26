export const getGifs = async (category) => {
    let limit = 24;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3DqCWKziiEanXgB2z6ENOpB7t008JTfE&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((image) => {
      return {
        id: image.id,
        title: image.title,
        url: image.images.fixed_height.url,
      };
    });
    return gifs;
    // console.log(gifs);
  };