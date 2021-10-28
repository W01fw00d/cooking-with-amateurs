import { Before } from 'cypress-cucumber-preprocessor/steps';

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
