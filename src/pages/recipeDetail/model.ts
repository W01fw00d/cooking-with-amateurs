import { RecipeDetails } from './interfaces';

export const mapRecipeTranslations = (
  result: Array<RecipeDetails>,
  recipesNamesLiterals: Array<any>,
  recipeSteps: Array<any>,
  ingredientsSectionsLiterals: Array<any>,
  ingredientsLiterals: Array<any>,
  emojis: {},
) => {
  const { code, image, description, preparationTime, ingredients } = result[0];

  const ingredientsMapping = ({ sectionName, items }): { sectionName: any; items: any } => ({
    sectionName: ingredientsSectionsLiterals[sectionName],
    items: items.map(({ code, quantity, alternatives }) => {
      let formattedItem = {
        name: ingredientsLiterals[code],
        emoji: emojis[code],
        quantity,
        alternatives,
      };

      if (formattedItem.alternatives) {
        formattedItem.alternatives = formattedItem.alternatives.map(alternative => ({
          name: ingredientsLiterals[alternative.code],
        }));
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
