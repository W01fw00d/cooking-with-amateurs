import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see {string} in the screen', string => {
  cy.contains(string);
});

Then(/^I( do not)? see "(.*)" in the page$/, (conditionalWord, text) => {
  const shallContain = conditionalWord !== ' do not';

  cy.get('#root').should(`${shallContain ? '' : 'not.'}contain`, text);
});

Then('I see {string} on the {string} Input', (inputText, inputName) => {
  cy.get(`#${inputName}`).should('have.value', inputText);
});
