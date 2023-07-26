import { GifGrid } from ".";

export const GIFtastic = ({categories}) => {
  return (
    <>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
