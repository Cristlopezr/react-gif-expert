import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;
    /* setCategories(['newCategory', ...categories]); */
    setCategories(cat => [newCategory, ...cat]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        /* setCategories={setCategories} */ /* onNewCategory es la funcion flecha, 
      pero la escribimos en en el input en vez de escribirla arriba*/ onNewCategory={value => onAddCategory(value)}
      />
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
