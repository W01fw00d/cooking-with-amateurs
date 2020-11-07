import { getRandomNumber, getRandomString } from '../test-utils';

describe('On Detail Page, navigate', function() {
  const URL = 'detail/1';

  const setStub = () => {
    cy.server();

    cy.route({
      method: 'GET',
      url: 'details/*',
      response: [
        {
          id: '1',
          code : 'gnocchi',
          description: getRandomString(getRandomNumber(1, 100)),
          preparationTime: '02:00',
          eventDate: '26/04/2020',
          difficulty: getRandomNumber(1, 5),
          nIngredients: getRandomNumber(1, 5),
          image: 'imgs/recipes/gyozas.jpeg',
        },
      ],
    });
  };

  it('User clicks on back button', function() {
    cy.visit(URL);
    cy.get('#back').click();
    cy.url().should('include', '/list');
  });

  it('User checks that list item is rendered with its name', function() {
    setStub();

    cy.visit(URL);

    cy.contains('Gnocchi');
  });
});
