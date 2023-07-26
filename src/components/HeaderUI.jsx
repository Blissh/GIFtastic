import { AddCategory } from "./AddCategory";

export const HeaderUI = ({ onAddCategory }) => {
  return (
    <header className="flex h-96  flex-col flex-wrap place-content-center  p-8 ">
      <h1 className="mb-8 text-center font-title text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl">
        GIFTastic
      </h1>

      <AddCategory onNewCategory={onAddCategory} />
      
    </header>
  );
};
