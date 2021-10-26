import { Given } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../fixtures/recipe';
import getCommon from '../../fixtures/list/literals';

Given('I will be visiting Not Found Page only', () => {
  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        notFound: 'notFound',
        goHome: 'goHome',
      },
    },
  });
});

Given('I will be visiting List Page too', () => {
  cy.intercept('GET', '/literals/en', {
    template: {
      common: { ...getCommon(), notFound: 'notFound', goHome: 'goHome' },
    },
    data: {
      recipesNames: {
        fideua: 'Fideuà',
      },
    },
  });

  cy.intercept('GET', 'recipes', [
    {
      ...getRecipe(),
      id: '1',
      code: 'fideua',
      showName: true,
    },
  ]);
});
