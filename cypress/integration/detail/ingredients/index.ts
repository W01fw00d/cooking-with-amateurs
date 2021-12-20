import { Before, Given } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../../fixtures/recipe';
import getRecipeDetail from '../../../fixtures/details/literals';
import getCommon from '../../../fixtures/list/literals';

Before(() => {
  cy.intercept('GET', '/languageOptions', {
    options: [
      {
        id: 'en',
        text: 'English',
      },
    ],
  });
});
Given(/^System loads Detail Page data( without ingredients)?$/, conditionalWord => {
  cy.intercept('GET', 'details/*', [
    {
      ...getRecipe(),
      id: '1',
      code: 'gnocchi',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=1',
        width: 1080,
        height: 1440,
      },
      ingredients: conditionalWord
        ? null
        : [
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
  ]);

  cy.intercept('GET', 'emojis', { empty: 'empty' });

  cy.intercept('GET', '/literals/en', {
    template: {
      recipeDetail: {
        ...getRecipeDetail(),
        image: 'Image',
        ingredients: 'Ingredients',
        noIngredients: 'No ingredients',
      },
    },
    data: {
      recipesNames: {
        gnocchi: 'Gnocchi',
      },
      recipeSteps: {
        gnocchi: [],
      },
      ingredientsSections: {
        sectionName: 'Section 1',
      },
      ingredients: {
        ingredient1: 'Ingredient A',
        alternative1: 'Alternative Ingredient A',
      },
    },
  });
});
