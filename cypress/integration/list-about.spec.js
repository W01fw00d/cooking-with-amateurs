import { getRandomNumber, getRandomString } from '../test-utils';

describe('On List Page, in About Drawer Panel', function () {
  const URL = 'list';

  const setStub = () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'tags',
      response: [],
    });

    cy.route({
      method: 'GET',
      url: 'recipes',
      response: [],
    });
  };

  it('User opens drawer side menu and sees author and project data', function () {
    setStub();
    cy.visit(URL);

    cy.get('#drawerButton').click({ force: true });
    cy.contains('Gabriel Romay Machado');
    cy.contains('romay.gabriel@gmail.com');
  });
});
