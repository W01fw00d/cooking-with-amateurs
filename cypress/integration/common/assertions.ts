import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see {string} in the page', string => {
  cy.contains(string);
});

Then(/^I do( not)? see "(.*)" in the page root$/, (conditionalWord, text) => {
  // TODO: refactor: can this be combined with 'I see {string} in the page' ?
  const shallContain = conditionalWord !== ' not';

  cy.get('#root').should(`${shallContain ? '' : 'not.'}contain`, text);
});

Then('I see {string} on the {string} Input', (inputText, inputName) => {
  cy.get(`#${inputName}`).should('have.value', inputText);
});
