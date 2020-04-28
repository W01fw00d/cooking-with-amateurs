import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeDetailTemplate } from 'chemistry-ui';

import recipe from '../../public/literals/majorcan/recipe.json';

import { getRecipeDetails } from '../utils/request';

export default function RecipeDetailPage() {
  const getLiterals = ({ ingredients }) => ({
    ingredients,
  });

  const [data, setData] = useState();
  const { recipeId } = useParams();

  useEffect(() => {
    getRecipeDetails(recipeId, result => {
      if (result) {
        const { name, image, description, preparationTime } = result[0];
        setData({
          name,
          image,
          description,
          preparationTime,
        });
      }
    });
  }, [recipeId]);

  return <RecipeDetailTemplate literals={getLiterals(recipe)} data={data} handleClick={() => {}} />;
}
