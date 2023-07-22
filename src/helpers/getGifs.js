export const getGifs = async (category) => {
    console.log(category);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3DqCWKziiEanXgB2z6ENOpB7t008JTfE&q=${category}&limit=2`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((image) => {
      return {
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url,
      };
    });
    return gifs;
    // console.log(gifs);
  };