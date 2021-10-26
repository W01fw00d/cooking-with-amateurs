import { Before } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../fixtures/recipe';
import getRecipeDetail from '../../fixtures/details/literals';

Before(() => {
  cy.intercept('GET', 'details/*', [
    {
      ...getRecipe(),
      id: '1',
      code: 'gnocchi',
    },
  ]);

  cy.intercept('GET', 'emojis', { empty: 'empty' });

  cy.intercept('GET', '/literals/en', {
    template: {
      recipeDetail: getRecipeDetail(),
    },
    data: {
      recipesNames: {
        gnocchi: 'Gnocchi',
      },
      recipeSteps: {
        gnocchi: [],
      },
    },
  });
});
