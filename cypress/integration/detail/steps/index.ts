import { Before, Given } from 'cypress-cucumber-preprocessor/steps';

import getRecipe from '../../../fixtures/recipe';
import getRecipeDetail from '../../../fixtures/details/literals';

Before(() => {
  cy.intercept('GET', '/languageOptions', {
    options: [
      {
        id: 'en',
        text: 'English',
      },
    ],
  });
});

Given(/^System loads Detail Page data( without steps)?$/, withoutSteps => {
  cy.intercept('GET', 'details/*', [
    {
      ...getRecipe(),
      id: '1',
      code: 'gnocchi',
      image: {
        src: 'cypress/fixtures/images/recipe.jpg?id=1',
        width: 1080,
        height: 1440,
      },
    },
  ]);

  cy.intercept('GET', 'emojis', { empty: 'empty' });

  cy.intercept('GET', '/literals/en', {
    template: {
      recipeDetail: {
        ...getRecipeDetail(),
        image: 'Image',
        steps: 'Steps',
        noSteps: 'No steps',
      },
    },
    data: {
      recipesNames: {
        gnocchi: 'Gnocchi',
      },
      recipeSteps: {
        gnocchi: withoutSteps
          ? []
          : [
              {
                id: 1,
                sectionName: 'Section A',
                items: ['Step 1', 'Step 2', 'Step 3'],
              },
              {
                id: 2,
                sectionName: 'Section B',
                description: 'Section B Description',
                items: ['Step 4', 'Step 5', 'Step 6'],
              },
            ],
      },
    },
  });
});
