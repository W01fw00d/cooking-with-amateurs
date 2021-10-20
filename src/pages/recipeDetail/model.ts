import { RecipeDetails } from './interfaces';

const mapRecipeTranslations = (
  result: Array<RecipeDetails>,
  recipesNamesLiterals: Array<any>,
  recipeSteps: Array<any>,
  ingredientsSectionsLiterals: Array<any>,
  ingredientsLiterals: Array<any>,
  emojis: {},
) => {
  const { code, image, description, preparationTime, ingredients } = result[0];

  const ingredientsMapping = ({
    id,
    sectionName,
    items,
  }): { id: number; sectionName: any; items: any } => ({
    id,
    sectionName: ingredientsSectionsLiterals[sectionName],
    items: items.map(({ code, quantity, alternatives }) => {
      let formattedItem = {
        name: ingredientsLiterals[code],
        emoji: emojis[code],
        quantity,
        alternatives,
      };

      if (formattedItem.alternatives) {
        formattedItem.alternatives = formattedItem.alternatives.map(
          (alternative: { code: string | number }) => ({
            name: ingredientsLiterals[alternative.code],
          }),
        );
      }

      return formattedItem;
    }),
  });

  return {
    code,
    name: recipesNamesLiterals[code],
    image,
    description,
    preparationTime,
    ingredients: ingredients ? ingredients.map(ingredientsMapping) : [],
    steps: recipeSteps[code],
  };
};

export default mapRecipeTranslations;
