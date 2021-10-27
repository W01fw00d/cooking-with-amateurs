import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../fixtures/recipe';

/*
We use the "id" url param to differentiate the last recipe image call,
even if the image file is the same for all recipes
*/
const LAST_IMAGE = 'cypress/fixtures/images/recipe.jpg?id=8';
let isLastImageLoaded = false;

Given('System will load Recipes with images', () => {
  cy.intercept(LAST_IMAGE, () => {
    isLastImageLoaded = true;
  });

  cy.intercept('GET', 'recipes', [
    {
      ...getRecipe(),
      id: '1',
      code: 'fideua',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=1',
        width: 1080,
        height: 1440,
      },
    },
    {
      ...getRecipe(),
      id: '2',
      code: 'fideua',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=2',
        width: 1080,
        height: 1440,
      },
    },
    {
      ...getRecipe(),
      id: '3',
      code: 'fideua',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=3',
        width: 1080,
        height: 1440,
      },
    },
    {
      ...getRecipe(),
      id: '4',
      code: 'fideua',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=4',
        width: 1080,
        height: 1440,
      },
    },
    {
      ...getRecipe(),
      id: '5',
      code: 'fideua',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=5',
        width: 1080,
        height: 1440,
      },
    },
    {
      ...getRecipe(),
      id: '6',
      code: 'fideua',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=6',
        width: 1080,
        height: 1440,
      },
    },
    {
      ...getRecipe(),
      id: '7',
      code: 'fideua',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=7',
        width: 1080,
        height: 1440,
      },
    },
    {
      ...getRecipe(),
      id: '8',
      code: 'fideua',
      image: {
        src: LAST_IMAGE,
        width: 1080,
        height: 1440,
      },
    },
  ]);
});

When('I scroll to the bottom of the page', () => cy.scrollTo('bottom'));

Then(/^Last image is( not)? called$/, conditionalWord => {
  const shallBeTrue = conditionalWord !== ' not';

  cy.wrap(isLastImageLoaded).should('eq', shallBeTrue);
});
