describe('On About Page', function () {
  const URL = 'about';

  it('User sees name and email', function () {
    cy.visit(URL);

    cy.contains('Gabriel Romay Machado');
    cy.contains('romay.gabriel@gmail.com');
  });

  it('User goes back to home', function () {
    cy.visit(URL);

    cy.get('#back').click();
    cy.url().should('include', '/list');
  });
});
