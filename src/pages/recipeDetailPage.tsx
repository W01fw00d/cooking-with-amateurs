import { RecipeDetailTemplate } from 'chemistry-ui';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
};

export default RecipeDetailPage;
