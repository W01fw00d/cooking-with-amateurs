import mapRecipeTranslations from './model.ts';

describe('recipeDetail/model', () => {
  describe('mapRecipeTranslations', () => {
    it('shall return a recipe with ingredients', () => {
      const result = [
        {
          code: 'code',
          image: 'image',
          description: 'description',
          preparationTime: 'preparationTime',
          ingredients: [
            {
              sectionName: 'sectionName',
              items: [
                {
                  code: 'ingredient1',
                  quantity: 1,
                  alternatives: [
                    {
                      code: 'alternative1',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      const recipeLiteral = 'recipeLiteral';
      const recipesNamesLiterals = {
        code: recipeLiteral,
      };
      const recipeSteps = {
        code: ['step1', 'step2'],
      };
      const sectionNameLiteral = 'sectionNameLiteral';
      const ingredientsSectionsLiterals = {
        sectionName: sectionNameLiteral,
      };
      const ingredient1Literal = 'ingredient1Literal';
      const alternative1Literal = 'alternative1Literal';
      const ingredientsLiterals = {
        ingredient1: ingredient1Literal,
        alternative1: alternative1Literal,
      };
      const ingredient1Emoji = 'ingredient1Emoji';
      const emojis = {
        ingredient1: ingredient1Emoji,
      };

      const recipe = mapRecipeTranslations(
        result,
        recipesNamesLiterals,
        recipeSteps,
        ingredientsSectionsLiterals,
        ingredientsLiterals,
        emojis,
      );

      const recipeIngredient = recipe.ingredients[0];
      const recipeIngredientItem = recipeIngredient.items[0];
      expect(recipe.name).toBe(recipeLiteral);
      expect(recipeIngredient.sectionName).toBe(sectionNameLiteral);
      expect(recipeIngredientItem.name).toBe(ingredient1Literal);
      expect(recipeIngredientItem.emoji).toBe(ingredient1Emoji);
      expect(recipeIngredientItem.alternatives[0].name).toBe(alternative1Literal);
    });

    it('shall return a recipe with ingredients but no alternatives', () => {
      const result = [
        {
          code: 'code',
          image: 'image',
          description: 'description',
          preparationTime: 'preparationTime',
          ingredients: [
            {
              sectionName: 'sectionName',
              items: [
                {
                  code: 'ingredient1',
                  quantity: 1,
                },
              ],
            },
          ],
        },
      ];
      const recipeLiteral = 'recipeLiteral';
      const recipesNamesLiterals = {
        code: recipeLiteral,
      };
      const recipeSteps = {
        code: ['step1', 'step2'],
      };
      const sectionNameLiteral = 'sectionNameLiteral';
      const ingredientsSectionsLiterals = {
        sectionName: sectionNameLiteral,
      };
      const ingredient1Literal = 'ingredient1Literal';
      const ingredientsLiterals = {
        ingredient1: ingredient1Literal,
      };
      const ingredient1Emoji = 'ingredient1Emoji';
      const emojis = {
        ingredient1: ingredient1Emoji,
      };

      const recipe = mapRecipeTranslations(
        result,
        recipesNamesLiterals,
        recipeSteps,
        ingredientsSectionsLiterals,
        ingredientsLiterals,
        emojis,
      );

      expect(recipe.ingredients[0].items[0].alternatives).toBe(undefined);
    });

    it('shall return a recipe with an empty ingredients array if no ingredients', () => {
      const result = [
        {
          code: 'code',
          image: 'image',
          description: 'description',
          preparationTime: 'preparationTime',
        },
      ];
      const recipeLiteral = 'recipeLiteral';
      const recipesNamesLiterals = {
        code: recipeLiteral,
      };
      const recipeSteps = {
        code: ['step1', 'step2'],
      };
      const sectionNameLiteral = 'sectionNameLiteral';
      const ingredientsSectionsLiterals = {
        sectionName: sectionNameLiteral,
      };
      const ingredientsLiterals = {};
      const emojis = {};

      const recipe = mapRecipeTranslations(
        result,
        recipesNamesLiterals,
        recipeSteps,
        ingredientsSectionsLiterals,
        ingredientsLiterals,
        emojis,
      );

      expect(recipe.ingredients.length).toBe(0);
    });
  });
});
