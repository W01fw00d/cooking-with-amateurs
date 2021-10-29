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
