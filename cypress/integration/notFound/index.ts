import { Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        notFound: 'notFound',
        goHome: 'goHome',
      },
    },
  });
});
