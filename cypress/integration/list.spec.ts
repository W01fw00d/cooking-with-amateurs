import { getRandomNumber, getRandomString } from '../../src/utils/test-utils';

describe('On List Page', function () {
  const URL = 'list';

  const firstName = "[Fideuà]";
  const secondName = "[Risotto]";
  const setStub = (showName?: boolean) => {
    cy.server();

    cy.route({
      method: 'GET',
      url: 'recipes',
      response: [
        {
          id: '1',
          code: "fideua",
          description: getRandomString(getRandomNumber(1, 100)),
          preparationTime: "01:00",
          eventDate: '26/04/2020',
          difficulty: getRandomNumber(1, 5),
          nIngredients: getRandomNumber(1, 5),
          image: 'imgs/recipes/gyozas.jpeg',
          showName,
        },
        {
          id: '2',
          code: "risotto",
          description: getRandomString(getRandomNumber(1, 100)),
          preparationTime: "01:00",
          eventDate: '26/04/2020',
          difficulty: getRandomNumber(1, 5),
          nIngredients: getRandomNumber(1, 5),
          image: 'imgs/recipes/gyozas.jpeg',
          showName,
        },
      ],
    });
  };

  it('User sees that list items are rendered', function () {
    setStub(true);
    cy.visit(URL);

    cy.contains(firstName);
    cy.contains(secondName);
  });

  it('User writes on search text input', function () {
    const inputText = getRandomString(getRandomNumber(1, 10));

    setStub();
    cy.visit(URL);

    cy.get('#search')
      .type(inputText)
      .should('have.value', 'Pròximament!' + inputText);
  });

  it('User clicks the "recipe 1" item link', function () {
    setStub(true);
    cy.visit(URL);

    cy.contains(firstName).click({ force: true });
    cy.url().should('include', 'detail/1');
  });

  it('User doesn\'t see names if recipes names are disabled', function () {
    setStub(false);
    cy.visit(URL);
    cy.wait(500);

    cy.get('#root').should('not.contain', firstName);
    cy.get('#root').should('not.contain', secondName)
  });
});
