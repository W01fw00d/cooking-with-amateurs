import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see {string} in the screen', string => {
  /*
  TODO: this step is currently only being used to check a string inside a drawer panel.
  Best solution would be add an "id" to the drawer panel component
  And check if that string exists inside it specifically
  */
  cy.contains(string);
});

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
