import { After } from 'cypress-cucumber-preprocessor/steps';

After(() => {
  cy.get('@consoleError').should('not.have.been.called');
  // Disabled warn check because it causes too much noise in tests
  // cy.get('@consoleWarn').should('not.have.been.called');
});
