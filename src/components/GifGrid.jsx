import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <h2 className="my-10 ml-10 text-xl font-bold text-gray-300 md:ml-20 xl:ml-28">
        Your search: {category}
      </h2>
      <section className="grid grid-flow-dense grid-cols-2 gap-6 px-8 md:grid-cols-3 md:px-20 lg:grid-cols-4 xl:grid-cols-6 xl:px-28">
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
