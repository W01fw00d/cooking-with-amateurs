import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^I( do not)? see "(.*)" in the page$/, (conditionalWord, text) => {
  const shallContain = conditionalWord !== ' do not';

  cy.get('#root').should(`${shallContain ? '' : 'not.'}contain`, text);
});

Then('I see {string} on the {string} Input', (inputText, inputName) => {
  cy.get(`#${inputName}`).should('have.value', inputText);
});

Then('I see the {string} image in the page', imageAlt => {
  cy.get(`[alt="${imageAlt}."]`)
    .should('be.visible')
    .and($img => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
});

Then('System checks that {string} Button opens a new tab with {string} url', (button, url) => {
  cy.get(`#${button}`)
    .should('have.attr', 'target')
    .and('include', '_blank');

  cy.get(`#${button}`)
    .should('have.attr', 'href')
    .and('include', url);
});
