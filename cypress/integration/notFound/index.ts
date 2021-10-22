import { Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  const setStub = () => {
    // TODO: refactor: this might be extracted to a utils function
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
