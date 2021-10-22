import { Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  const user = 'gabriel';

  const setStub = () => {
    cy.intercept('GET', '/literals/en', {
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
    });
  };

  setStub();
});
