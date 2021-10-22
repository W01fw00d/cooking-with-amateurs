import { Given } from 'cypress-cucumber-preprocessor/steps';

import { getRandomNumber, getRandomStringWithLengthInRange } from '../../utils/random';

/*
  How to refactor this: there should be a Given step that just sets random recipes
  This step woul call a fixture.js function
  that generates this basic "recipes" response with random strings everywhere.
  Then, the Given step that requires to show their names and to have static data
  would call that function and build upon that data as a base
*/

Given(/^Recipes will( not)? show their name$/, conditionalWord => {
  const showName = conditionalWord !== ' not';

  const difficulty = 'difficulty';
  const firstName = 'Fideuà';
  const secondName = 'Risotto';

  const setStub = () => {
    // TODO: the number of recipes could be random, with a min of 2 recipes with static names for assertions
    cy.intercept('GET', 'recipes', [
      {
        id: '1',
        code: 'fideua',
        description: getRandomStringWithLengthInRange(1, 100),
        preparationTime: '01:00',
        eventDate: '26/04/2020',
        difficulty: getRandomNumber(1, 5),
        nIngredients: getRandomNumber(1, 5),
        image: null,
        showName,
      },
      {
        id: '2',
        code: 'risotto',
        description: getRandomStringWithLengthInRange(1, 100),
        preparationTime: '01:00',
        eventDate: '26/04/2020',
        difficulty: getRandomNumber(1, 5),
        nIngredients: getRandomNumber(1, 5),
        image: null,
        showName,
      },
    ]);

    /*
      When refactoring this into fixture files, there should be independent functions
      for returning template.common, data, etc... so we have flexibility to combine
      different literals data for different pages

      fixtures/list/literalsEn.templateCommon
      fixtures/list/literalsEn.templateProjectData
      fixtures/list/literalsEn.recipeDetail
      fixtures/list/literalsEn.data

      Main objective is to separate required fixed strings (here on each feature folder)
      and generic random data (in fixtures)
    */
    cy.intercept('GET', '/literals/en', {
      template: {
        common: {
          about: 'about',
          difficulty,
          preparationTime: 'preparationTime',
          howManyIngredients: 'howManyIngredients',
        },
      },
      data: {
        recipesNames: {
          fideua: firstName,
          risotto: secondName,
        },
        recipeSteps: {
          fideua: [],
          risotto: [],
        },
      },
    });
  };

  setStub();
});
