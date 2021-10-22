import { Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  const setStub = () => {
    cy.intercept('GET', '/literals/en', {
      template: {
        common: {
          notFound: 'notFound',
          goHome: 'goHome',
        },
      },
    });
  };

  setStub();
});
