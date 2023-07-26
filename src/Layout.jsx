import { useState } from "react";
import { GIFtastic, HeaderUI} from './components';
import { Separator } from "./components/Separator";

export const Layout = () => {
  const [categories, setCategories] = useState(['Valorant']);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  
  return (
    <div className="bg-gradient-to-br from-black to-slate-800 h-full min-h-screen">
      <HeaderUI onAddCategory={onAddCategory}/>
      <Separator />
      <GIFtastic categories={categories} />
    </div>
    // <main className="h-screen bg-gradient-to-br from-slate-900 to-slate-800 ">

    // </main>
  );
};
