import { Given } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../fixtures/recipe';
import getRecipeDetail from '../../fixtures/details/literals';
import getCommon from '../../fixtures/list/literals';

Given('System loads Detail Page only', () => {
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

Given('System loads Detail and List Page', () => {
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
      common: getCommon(),
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

  cy.intercept('GET', 'recipes', [
    {
      ...getRecipe(),
      id: '1',
      code: 'gnocchi',
      showName: true,
    },
  ]);
});
