Feature: On Detail Page

  Background:
    Given I visit "detail/1" Page

  @core
  Scenario: See the recipe name
    Then I see "Gnocchi" in the page

  Scenario: Go back to Home Page
    # TODO: Refactor this step to allow adding a subdirectory
    When I click on the "back" Button
    Then I am redirected to "List" Page
    # TODO: setStub for List Page, so it's not displayed blank, and check
    # Then I see "Fideuà" in the page
