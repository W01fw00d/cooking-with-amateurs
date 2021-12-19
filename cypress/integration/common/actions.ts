import { When } from 'cypress-cucumber-preprocessor/steps';

When('I wait {int} milliseconds', milliseconds => {
  cy.wait(milliseconds);
});

When('I click on the {string} Button', id => {
  cy.get(`#${id}`).click({ force: true });
});

When('I click on the {string} Text', text => {
  cy.contains(text).click({ force: true });
});

When('I write {string} on the {string} Input', (inputText, inputName) => {
  cy.get(`#${inputName}`).type(inputText);
});

When('I select {string} Option in the {string} Select', (option, select) => {
  cy.contains(select).click({ force: true });
  cy.contains(option).click({ force: true });
});
