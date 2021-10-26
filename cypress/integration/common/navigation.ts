import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit {string} Page', page => {
  cy.visit(page.toLowerCase(), {
    onBeforeLoad(win) {
      cy.stub(win.console, 'error').as('consoleError');
      // Disabled warn check because it causes too much noise in tests
      // cy.stub(win.console, 'warn').as('consoleWarn');
    },
  });
});

Then('I am redirected to {string} Page', page => {
  cy.url().should('include', `/${page.toLowerCase()}`);
});
