import { Before } from 'cypress-cucumber-preprocessor/steps';

import { getCommon, getProjectData } from '../../fixtures/about/literals';

Before(() => {
  /* TODO: move hardcoded data in the about page to a json and stub it here,
    using random lenght array for participants
    */
  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        ...getCommon(),
        gabriel: 'gabriel',
        about: 'about',
      },
      projectData: getProjectData(),
    },
  });
});
