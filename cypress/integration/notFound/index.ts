import { Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  const setStub = () => {
    // TODO: refactor: this might be extracted to a utils function
    cy.server();

    cy.route({
      method: 'GET',
      url: '/literals/en',
      response: {
        template: {
          common: {
            notFound: 'notFound',
            goHome: 'goHome',
          },
        },
      },
    });
  };

  setStub();
});
