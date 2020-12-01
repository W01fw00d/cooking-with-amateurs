describe('On List Page, in About Drawer Panel', function () {
  const URL = 'list';

  const setStub = () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'recipes',
      response: [],
    });
  };

  it('User opens drawer side menu and sees About link', function () {
    setStub();
    cy.visit(URL);

    cy.get('#drawerButton').click({ force: true });
    cy.contains('Acerca de');
  });
});
