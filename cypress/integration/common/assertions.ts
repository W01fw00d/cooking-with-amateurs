import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^I( do not)? see "(.*)" in the page$/, (shallNotBeVisible, text) => {
  /* TODO: (Refactor) ideally, this and next step should be combined in a single step,
  cucumber writer does NOT need to know if they are not seeing an element
  because it's not present in DOM or because is not visible by CSS rule
  */
  cy.contains(text).should(`${shallNotBeVisible ? 'not.' : ''}be.visible`);
});

Then(/^"(.*)" is not present in the page$/, (shallNotContain, text) => {
  cy.get('#root').should(`${shallNotContain ? 'not.' : ''}contain`, text);
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
