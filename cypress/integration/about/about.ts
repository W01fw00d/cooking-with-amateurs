import { Before, Given } from 'cypress-cucumber-preprocessor/steps';

const URL = 'about';

Before(() => {
  const user = 'gabriel';

  const setStub = () => {
    cy.server();

    cy.route({
      method: 'GET',
      url: '/literals/en',
      response: {
        template: {
          common: {
            gabriel: user,
            about: 'about',
            participants: 'participants',
            cv: 'cv',
          },
          projectData: {
            description: 'description',
          },
        },
      },
    });
  };

  setStub();
});

Given('I visit About Page', () => {
  cy.visit(URL);
});
