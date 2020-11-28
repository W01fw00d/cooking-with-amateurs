import { RecipeDetailTemplate } from 'chemistry-ui';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import translate from '../../language/translate';
import { getRecipeDetails } from '../../utils/request';

import { Literals, RecipeDetails } from './interfaces';
import { mapRecipeTranslations } from './model';

export default () => {
  const recipesNamesLiterals = translate('recipesNames');
  const recipeSteps = translate('recipeSteps');
  const ingredientsSectionsLiterals = translate('ingredientsSections');
  const ingredientsLiterals = translate('ingredients');
  const recipeDetail = translate('recipeDetail');

  const getLiterals = ({ ingredients, noIngredients, steps, noSteps }: Literals) => ({
    ingredients,
    noIngredients,
    steps,
    noSteps
  });

  const [data, setData] = useState<RecipeDetails | null>(null);
  const { recipeId } = useParams();

  useEffect(() => {
    getRecipeDetails(recipeId, (result: Array<RecipeDetails>) => {
      if (result) {
        setData(mapRecipeTranslations(
          result,
          recipesNamesLiterals,
          recipeSteps,
          ingredientsSectionsLiterals,
          ingredientsLiterals
        ));
      }
    });
  }, [recipeId]);

  return data &&
    <RecipeDetailTemplate
      literals={getLiterals(recipeDetail)}
      data={data}
      handleClick={() => { }}
    />;
};
