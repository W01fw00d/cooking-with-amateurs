Feature: On Detail Page

  @core
  Scenario: See the recipe name
    Given System loads Detail Page only
    And I visit "detail/1" Page
    Then I see "Gnocchi" in the page

  @core
  Scenario: See the recipe image
    Given System loads Detail Page only
    And I visit "detail/1" Page
    Then I see the "Gnocchi" image in the page

  Scenario: Go back to Home Page
    Given System loads Detail and List Page
    And I visit "detail/1" Page
    Then I see "Gnocchi" in the page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    And I see "Gnocchi" in the page
