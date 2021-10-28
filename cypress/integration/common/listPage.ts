import { Given } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../fixtures/recipe';

Given(/^System will load Recipes that will( not)? show their name$/, conditionalWord => {
  const showName = conditionalWord !== ' not';

  // TODO: the number of recipes could be random,
  // with a min of 2 recipes with static names for assertions
  cy.intercept('GET', 'recipes', [
    {
      ...getRecipe(),
      id: '1',
      code: 'fideua',
      showName,
    },
    {
      ...getRecipe(),
      id: '2',
      code: 'risotto',
      showName,
    },
  ]);
});

Given('System will load random Recipes', () => {
  // TODO: the number of recipes could be random,
  // with a min of 2 recipes with static names for assertions
  cy.intercept('GET', 'recipes', [
    {
      ...getRecipe(),
      id: '1',
      code: 'fideua',
    },
    {
      ...getRecipe(),
      id: '2',
      code: 'risotto',
    },
  ]);
});
