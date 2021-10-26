import { Before, Given } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../fixtures/recipe';
import getCommon from '../../fixtures/list/literals';

Before(() => {
  cy.intercept('GET', '/literals/en', {
    template: {
      common: {
        ...getCommon(),
        about: 'about',
        difficulty: 'difficulty',
      },
    },
    data: {
      recipesNames: {
        fideua: 'Fideuà',
        risotto: 'Risotto',
      },
      /*       recipeSteps: {
        fideua: [],
        risotto: [],
      }, */
    },
  });
});

/*
  How to refactor this: there should be a Given step that just sets random recipes
  This step woul call a fixture.js function
  that generates this basic "recipes" response with random strings everywhere.
  Then, the Given step that requires to show their names and to have static data
  would call that function and build upon that data as a base
*/

// TODO: rename to /^System will load Recipes that will( not)? show their name$/
Given(/^Recipes will( not)? show their name$/, conditionalWord => {
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
