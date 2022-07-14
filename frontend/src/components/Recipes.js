import React from 'react';


const Recipes = () => {
    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search);
    return (
    <h2>
        Рецепт из категории: {query.get('catId')}
    </h2>
    );
}

export default Recipes;