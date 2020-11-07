import { RecipeDetailTemplate } from 'chemistry-ui';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import translate from '../language/translate';
import { getRecipeDetails } from '../utils/request';

export default () => {
  interface Literals {
    ingredients: String;
  }

  interface RecipeDetails {
    name: String;
    code: String;
    image: String;
    description: String;
    preparationTime: String;
    ingredients: { sectionName: any; items: any; }[];
    steps: [];
  }

  const ingredientsLiterals = translate('ingredients');
  const ingredientsSectionsLiterals = translate('ingredientsSections');
  const recipe = translate('recipe');
  const recipesNamesLiterals = translate('recipesNames');
  const recipeSteps = translate('recipeSteps');

  const getLiterals = ({ ingredients }: Literals) => ({
    ingredients,
  });

  const [data, setData] = useState<RecipeDetails>();
  const { recipeId } = useParams();

  useEffect(() => {
    getRecipeDetails(recipeId, (result: Array<RecipeDetails>) => {
      if (result) {
        const { code, image, description, preparationTime, ingredients } = result[0];

        const ingredientsMapping = (section): { sectionName: any; items: any; } => {
          return {
            sectionName: ingredientsSectionsLiterals[section.sectionName],
            items: section.items.map(item => {
              let formattedItem = { quantity: item.quantity, name: ingredientsLiterals[item.code] };

              if (formattedItem.alternatives) {
                formattedItem.alternatives = formattedItem.alternatives.map(alternative => ({
                  name: ingredientsLiterals[alternative.code],
                }));
              }

              return formattedItem;
            }),
          };
        };
        setData({
          code,
          name: recipesNamesLiterals[code],
          image,
          description,
          preparationTime,
          ingredients: ingredients ?
            ingredients.map(ingredientsMapping) :
            [],
          steps: recipeSteps[code],
        });
      }
    });
  }, [recipeId]);

  return <RecipeDetailTemplate literals={getLiterals(recipe)} data={data} handleClick={() => {}} />;
};
