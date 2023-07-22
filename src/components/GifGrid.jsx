import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const imgs = await getGifs(category);
    console.log(imgs);
    setImages(imgs);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title, url }) => (
          <>
            <img src={url} alt={title} />
            <li key={id}>{title}</li>
          </>
        ))}
      </ol>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
