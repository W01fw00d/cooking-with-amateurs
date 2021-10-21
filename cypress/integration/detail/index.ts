import { Before } from 'cypress-cucumber-preprocessor/steps';

import { getRandomNumber, getRandomString } from '../../utils/random';

Before(() => {
  const gnocchiName = 'Gnocchi';

  const setStub = () => {
    cy.server();

    cy.route({
      method: 'GET',
      url: 'details/*',
      response: [
        {
          id: '1',
          code: 'gnocchi',
          description: getRandomString(getRandomNumber(1, 100)),
          preparationTime: '02:00',
          eventDate: '26/04/2020',
          difficulty: getRandomNumber(1, 5),
          nIngredients: getRandomNumber(1, 5),
          image: null,
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
            gabriel: 'gabriel',
            about: 'about',
            participants: 'participants',
            cv: 'cv',
          },
          recipeDetail: {
            image: 'Image',
            ingredients: 'Ingredients',
            noIngredients: 'No ingredients required',
            steps: 'Steps',
            noSteps: 'No steps required',
          },
        },
        data: {
          recipesNames: {
            gnocchi: gnocchiName,
          },
          recipeSteps: {
            gnocchi: [],
          },
        },
      },
    });
  };

  setStub();
});
