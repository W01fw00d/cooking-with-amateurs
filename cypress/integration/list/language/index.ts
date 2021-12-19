import { Before } from 'cypress-cucumber-preprocessor/steps';

import getCommon from '../../../fixtures/list/literals';

Before(() => {
  cy.intercept('GET', '/languageOptions', {
    options: [
      {
        id: 'a',
        text: 'Language A',
      },
      {
        id: 'b',
        text: 'Language B',
      },
    ],
  });

  cy.intercept('GET', '/literals/a', {
    template: {
      common: {
        ...getCommon(),
        difficulty: 'Literal A',
      },
    },
    data: {
      recipesNames: {
        fideua: 'Recipe A',
      },
    },
  });

  cy.intercept('GET', '/literals/b', {
    template: {
      common: {
        ...getCommon(),
        difficulty: 'Literal B',
      },
    },
    data: {
      recipesNames: {
        fideua: 'Recipe B',
        risotto: 'Risotto',
      },
    },
  });
});
