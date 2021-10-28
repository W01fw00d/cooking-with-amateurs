import { Given } from 'cypress-cucumber-preprocessor/steps';

import { getCommon as aboutGetCommon, getProjectData } from '../../../fixtures/about/literals';

/*
TODO: refactor: to make this step more Readable,
allow the user to specify which literals should be fixed, in this case "gabriel" and "about"
 */
Given('System loads About Page data', () => {
  /* TODO: move hardcoded data in the about page to a json and stub it here,
    using random lenght array for participants
    */
  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        ...aboutGetCommon(),
        gabriel: 'gabriel',
        about: 'about',
      },
      projectData: getProjectData(),
    },
  });
});
