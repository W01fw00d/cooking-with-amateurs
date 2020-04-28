import React, { useState, useEffect } from 'react';

import { RecipeListTemplate } from 'chemistry-ui';

import common from '../../public/literals/majorcan/common.json';
import recipe from '../../public/literals/majorcan/recipe.json';

import { getRecipes } from '../utils/request';

export default function RecipeListPage() {
  const literals = { ...common, ...recipe };
  const getLiterals = ({ difficulty, preparationTime, howManyIngredients }) => ({
    difficulty,
    preparationTime,
    howManyIngredients,
  });

  const [search, setSearch] = useState(common.comingSoon);
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    getRecipes(setRecipes);
  }, []);

  return (
    <RecipeListTemplate
      literals={getLiterals(literals)}
      authorData={{
        name: common.gabriel,
        email: 'romay.gabriel@gmail.com',
        url: common.cv,
      }}
      projectData={{
        description: recipe.projectDescription,
        url: 'https://github.com/W01fw00d/cooking-with-amateurs/blob/master/README.md',
      }}
      search={search}
      itemList={recipes}
      handleChange={({ currentTarget }) => {
        setSearch(currentTarget.value);
      }}
      handleClick={() => {}}
    />
  );
}
