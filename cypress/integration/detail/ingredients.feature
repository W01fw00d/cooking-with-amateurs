Feature: On Detail Page

  @core
  Scenario: Change to Ingredients Tab and then back to Image Tab
    Given System loads Detail Page data without ingredients
    And I visit "detail/1" Page
    Then I see "Gnocchi" in the page
    Then I do not see "No ingredients" in the page
    When I click on the "Ingredients" Text
    Then I see "No ingredients" in the page
    When I click on the "Image" Text
    Then I do not see "No ingredients" in the page

  Scenario: Change to Ingredients Tab when there are no ingredients
    Given System loads Detail Page data without ingredients
    And I visit "detail/1" Page
    Then I see "Gnocchi" in the page
    When I click on the "Ingredients" Text
    Then I see "No ingredients" in the page
