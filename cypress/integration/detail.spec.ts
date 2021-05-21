import { getRandomNumber, getRandomString } from '../utils/random';

describe('On Detail Page, navigate', () => {
  const URL = 'detail/1';
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
          // image: 'imgs/recipes/gyozas.jpeg',
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

  it('User clicks on back button', () => {
    setStub();

    cy.visit(URL);
    cy.get('#back').click();
    cy.url().should('include', '/list');
  });

  it('User checks that list item is rendered with its name', () => {
    setStub();

    cy.visit(URL);

    cy.contains(gnocchiName);
  });
});
