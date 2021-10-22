import { Before } from 'cypress-cucumber-preprocessor/steps';

import { getRandomNumber, getRandomString } from '../../utils/random';

Before(() => {
  const gnocchiName = 'Gnocchi';

  const setStub = () => {
    cy.intercept('GET', 'details/*', [
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
    ]);

    cy.intercept('GET', 'emojis', { empty: 'empty' });

    cy.intercept('GET', '/literals/en', {
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
    });
  };

  setStub();
});
