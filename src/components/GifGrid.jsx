import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>

      {isLoading && <h2>Loading...</h2>} 
      <h2 className="text-xl text-gray-300 font-bold ml-10 my-10">Your search: {category}</h2>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 grid-flow-dense px-10">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </section>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
