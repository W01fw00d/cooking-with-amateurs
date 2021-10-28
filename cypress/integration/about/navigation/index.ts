import { Given } from 'cypress-cucumber-preprocessor/steps';

import getCommon from '../../../fixtures/list/literals';
import getRecipe from '../../../fixtures/recipe';
import { getCommon as aboutGetCommon, getProjectData } from '../../../fixtures/about/literals';

Given('System loads About and List Page data', () => {
  cy.intercept('GET', '/literals/en', {
    template: {
      common: { ...getCommon(), ...aboutGetCommon(), gabriel: 'gabriel', about: 'about' },
      projectData: getProjectData(),
    },
    data: {
      recipesNames: {
        fideua: 'Fideuà',
      },
    },
  });

  cy.intercept('GET', 'recipes', [
    {
      ...getRecipe(),
      id: '1',
      code: 'fideua',
      showName: true,
    },
  ]);
});
