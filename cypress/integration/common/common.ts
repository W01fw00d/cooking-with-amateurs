import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I click on the {string} Button', id => {
  cy.get(`#${id.toLowerCase()}`).click();
});

Then('I see {string} in the page', string => {
  cy.contains(string);
});
