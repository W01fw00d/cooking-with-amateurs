import { RecipeDetailTemplate } from 'chemistry-ui';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ingredientsLiterals from '../../public/literals/majorcan/ingredients.json';
import recipe from '../../public/literals/majorcan/recipe.json';
import { getRecipeDetails } from '../utils/request';

interface Literals {
  ingredients: String;
}

interface RecipeDetails {
  name: String;
  image: String;
  description: String;
  preparationTime: String;
  ingredients: [];
}

const RecipeDetailPage: React.FC = () => {
  const getLiterals = ({ ingredients }: Literals) => ({
    ingredients,
  });

  const [data, setData] = useState<RecipeDetails>();
  const { recipeId } = useParams();

  useEffect(() => {
    getRecipeDetails(recipeId, (result: Array<RecipeDetails>) => {
      if (result) {
        const { name, image, description, preparationTime, ingredients } = result[0];

        const ingredientsMapping = section => {
          return {
            sectionName: ingredientsLiterals[section.sectionName],
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
          name,
          image,
          description,
          preparationTime,
          ingredients: ingredients.map(ingredientsMapping),
        });
      }
    });
  }, [recipeId]);

  return <RecipeDetailTemplate literals={getLiterals(recipe)} data={data} handleClick={() => {}} />;
};

export default RecipeDetailPage;
