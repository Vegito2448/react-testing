import { GIFResponse } from '../interfaces';

const getImage = async () => {
  try {
    const apiKey = process.env.GIPHY_API_KEY;

    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
    );

    const { data } = (await resp.json()) as GIFResponse;

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    return 'Does not exist';
  }
};
export { getImage };
