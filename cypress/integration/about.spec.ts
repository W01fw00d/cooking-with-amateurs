describe('On About Page', () => {
  const URL = 'about';

  const user = 'gabriel';

  const setStub = () => {
    cy.server();

    cy.route({
      method: 'GET',
      url: '/literals/en',
      response: {
        template: {
          common: {
            gabriel: user,
            about: 'about',
            participants: 'participants',
            cv: 'cv',
          },
          projectData: {
            description: 'description',
          },
        },
      },
    });
  };

  it('User sees name and email', () => {
    setStub();

    cy.visit(URL);

    cy.contains(user);
    cy.contains('romay.gabriel@gmail.com');
  });

  it('User goes back to home', () => {
    cy.visit(URL);

    cy.get('#back').click();
    cy.url().should('include', '/list');
  });
});
