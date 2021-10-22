import { Before } from 'cypress-cucumber-preprocessor/steps';

import { getRandomStringWithLengthInRange } from '../../utils/random';

Before(() => {
  const user = 'gabriel';

  const setStub = () => {
    /* TODO: move hardcoded cada in the about page to a json and stub it here,
    using random lenght array for participants
    */
    cy.intercept('GET', '/literals/en', {
      template: {
        common: {
          gabriel: user,
          about: 'about',
          participants: getRandomStringWithLengthInRange(1, 20),
          cv: 'https://www.google.com/',
        },
        projectData: {
          description: getRandomStringWithLengthInRange(1, 300),
        },
      },
    });
  };

  setStub();
});
