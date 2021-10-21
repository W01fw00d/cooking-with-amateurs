Feature: On Detail Page

  @core
  Scenario: See the recipe name
    Given I visit "detail/1" Page
    Then I see "Gnocchi" in the page

  Scenario: Go back to Home Page
    # TODO: Refactor this step to allow adding a subdirectory
    Given I visit "detail/1" Page
    When I click on the "back" Button
    Then I am redirected to "List" Page
