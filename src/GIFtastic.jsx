import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GIFtastic = () => {
  const [categories, setCategories] = useState(["Valorant"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GIFtastic</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
