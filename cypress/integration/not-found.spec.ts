describe('Try to navigate to unknown url', () => {
  const notFound = 'notFound';

  const setStub = () => {
    cy.server();

    cy.route({
      method: 'GET',
      url: '/literals/en',
      response: {
        template: {
          common: {
            notFound,
            goHome: 'goHome',
          },
        },
      },
    });
  };

  it('User navigates to root', () => {
    cy.visit('');
    cy.url().should('include', 'list');
  });

  it('User checks that not found message is rendered', () => {
    setStub();

    cy.visit('fake');
    cy.contains(notFound);
  });

  it('User goes back to home', () => {
    cy.visit('fake');
    cy.get('#back').click();
    cy.url().should('include', '/list');
  });
});
