import React from 'react';


const Recipe = () => {
  const params = useParams();

  return (
    <h2>Выбран рецепт {params.id}</h2>
  );
};

export default Recipe;