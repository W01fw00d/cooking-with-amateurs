describe('On List Page', function () {
  const URL = 'about';

  it('User sees name and email', function () {
    cy.visit(URL);

    cy.contains('Gabriel Romay Machado');
    cy.contains('romay.gabriel@gmail.com');
  });
});
