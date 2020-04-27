import React, { useState, useEffect } from 'react';

import { RecipeListTemplate } from 'chemistry-ui';

import { getRecipes } from '../utils/request';

export default function RecipeListPage() {
  const literals = {
    search: 'Search',
  };

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    getRecipes(setRecipes);
  }, []);

  return (
    <RecipeListTemplate
      literals={literals}
      authorData={{
        name: 'Gabriel Romay Machado',
        email: 'romay.gabriel@gmail.com',
        url: 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114/?locale=en_US',
      }}
      projectData={{
        description:
          'While quarentined, a group of friends ' +
          'attempt to learn how to cook under the expert guidance of the Great Chef Mateu...',
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
