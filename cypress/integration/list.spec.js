import { getRandomNumber, getRandomString } from '../test-utils';

describe('On List Page', function() {
  const URL = 'list';

  const setStub = (firstName, secondName) => {
    cy.server();

    cy.route({
      method: 'GET',
      url: 'recipes',
      response: [
        {
          id: '1',
          name: 'name',
          description: getRandomString(getRandomNumber(1, 100)),
          preparationTime: firstName,
          eventDate: '26/04/2020',
          difficulty: getRandomNumber(1, 5),
          nIngredients: getRandomNumber(1, 5),
          image: 'imgs/recipes/gyozas.jpeg',
        },
        {
          id: '2',
          name: 'name',
          description: getRandomString(getRandomNumber(1, 100)),
          preparationTime: secondName,
          eventDate: '26/04/2020',
          difficulty: getRandomNumber(1, 5),
          nIngredients: getRandomNumber(1, 5),
          image: 'imgs/recipes/gyozas.jpeg',
        },
      ],
    });
  };

  it('User sees that list items are rendered', function() {
    const firstName = getRandomString(getRandomNumber(1, 20));
    const secondName = getRandomString(getRandomNumber(1, 20));

    setStub(firstName, secondName);
    cy.visit(URL);

    cy.contains(firstName);
    cy.contains(secondName);
  });

  it('User writes on search text input', function() {
    const inputText = getRandomString(getRandomNumber(1, 10));

    cy.visit(URL);

    cy.get('#search')
      .type(inputText)
      .should('have.value', 'Próximament!' + inputText);
  });

  it('User clicks the "recipe 1" item link', function() {
    const firstName = getRandomString(getRandomNumber(1, 20));

    setStub(firstName, firstName);
    cy.visit(URL);

    cy.contains(firstName).click({ force: true });
    cy.url().should('include', 'detail/1');
  });
});
