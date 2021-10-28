import { Given } from 'cypress-cucumber-preprocessor/steps';

import getCommon from '../../../fixtures/list/literals';

Given('System loads List Page data', () => {
  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        ...getCommon(),
        about: 'about',
        difficulty: 'difficulty',
      },
    },
    data: {
      recipesNames: {
        fideua: 'Fideuà',
        risotto: 'Risotto',
      },
    },
  });
});
