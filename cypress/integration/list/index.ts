import { Given } from 'cypress-cucumber-preprocessor/steps';

import { getRandomNumber, getRandomString } from '../../utils/random';

Given(/^Recipes will( not)? show their name$/, conditionalWord => {
  const showName = conditionalWord !== ' not';

  const difficultyLiteral = 'difficulty';
  const firstName = 'Fideuà';
  const secondName = 'Risotto';

  const setStub = () => {
    cy.server();

    cy.route({
      method: 'GET',
      url: 'recipes',
      response: [
        {
          id: '1',
          code: 'fideua',
          description: getRandomString(getRandomNumber(1, 100)),
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
          description: getRandomString(getRandomNumber(1, 100)),
          preparationTime: '01:00',
          eventDate: '26/04/2020',
          difficulty: getRandomNumber(1, 5),
          nIngredients: getRandomNumber(1, 5),
          image: null,
          showName,
        },
      ],
    });

    cy.route({
      method: 'GET',
      url: 'emojis',
      response: {},
    });

    cy.route({
      method: 'GET',
      url: '/literals/en',
      response: {
        template: {
          common: {
            about: 'about',
            difficulty: difficultyLiteral,
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
      },
    });
  };

  setStub();
});
