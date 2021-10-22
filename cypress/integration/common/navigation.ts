import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit {string} Page', page => {
  cy.visit(page.toLowerCase());
});

Then('I am redirected to {string} Page', page => {
  cy.url().should('include', `/${page.toLowerCase()}`);
});
