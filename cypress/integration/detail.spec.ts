import { getRandomNumber, getRandomString } from '../utils/test-utils';

describe('On Detail Page, navigate', function() {
  const URL = 'detail/1';

  const setStub = (name: string) => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'details/*',
      response: [
        {
          id: '1',
          name,
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
    const name = getRandomString(getRandomNumber(1, 20));

    setStub(name);

    cy.visit(URL);

    cy.contains(name);
  });
});
