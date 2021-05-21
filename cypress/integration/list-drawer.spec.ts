describe('On List Page, in About Drawer Panel', () => {
  const URL = 'list';

  const about = 'about';

  const setStub = () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'recipes',
      response: [],
    });
    cy.route({
      method: 'GET',
      url: '/literals/en',
      response: {
        template: {
          common: {
            about,
          },
        },
      },
    });
  };

  it('User opens drawer side menu and sees About link', () => {
    setStub();
    cy.visit(URL);

    cy.get('#drawerButton').click({ force: true });
    cy.contains(about);
  });
});
