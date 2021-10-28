import { Given } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../../fixtures/recipe';
import getCommon from '../../../fixtures/list/literals';
import getRecipeDetail from '../../../fixtures/details/literals';
import { getCommon as aboutGetCommon, getProjectData } from '../../../fixtures/about/literals';

Given('System loads List and Detail Page', () => {
  cy.intercept('GET', 'emojis', { empty: 'empty' });

  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        ...getCommon(),
        about: 'about',
        difficulty: 'difficulty',
      },
      recipeDetail: getRecipeDetail(),
    },
    data: {
      recipesNames: {
        fideua: 'Fideuà',
      },
      recipeSteps: {
        gnocchi: [],
      },
    },
  });

  cy.intercept('GET', 'details/*', [
    {
      ...getRecipe(),
      id: '1',
      code: 'fideua',
    },
  ]);
});

Given('System loads List and About Page', () => {
  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        ...getCommon(),
        ...aboutGetCommon,
        about: 'about',
        difficulty: 'difficulty',
      },
      projectData: getProjectData(),
    },
    data: {
      recipesNames: {
        fideua: 'Fideuà',
        risotto: 'Risotto',
      },
    },
  });
});
