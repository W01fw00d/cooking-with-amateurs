import { RecipeListTemplate } from 'chemistry-ui';
import React, { useEffect, useState } from 'react';
import { translate } from '../language';
import { getRecipes } from '../utils/request';

interface Literals {
  difficulty: String;
  preparationTime: String;
  howManyIngredients: String;
}

export default function RecipeListPage() {
  const common = translate('common');
  const recipe = translate('recipe');
  const recipesNamesLiterals = translate('recipesNames');

  const literals = { ...common, ...recipe };
  const getLiterals = ({ difficulty, preparationTime, howManyIngredients }: Literals) => ({
    difficulty,
    preparationTime,
    howManyIngredients,
  });

  const [search, setSearch] = useState(common.comingSoon);
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    getRecipes(recipeResults => {
      setRecipes(
        recipeResults.map(recipeResult => {
          if (recipeResult.showName) {
            recipeResult.name = recipesNamesLiterals[recipeResult.code];
          }

          return recipeResult;
        }),
      );
    });
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
      handleChange={({ currentTarget }: { currentTarget: { value: string } }) => {
        setSearch(currentTarget.value);
      }}
      handleClick={() => {}}
    />
  );
}
