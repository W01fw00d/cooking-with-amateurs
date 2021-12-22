Feature: On Detail Page

  @core
  Scenario: Change to Ingredients Tab without ingredients and then back to Image Tab
    Given System loads Detail Page data without ingredients
    And I visit "detail/1" Page
    Then I see "Gnocchi" in the page
    Then I do not see "No ingredients" in the page
    When I click on the "Ingredients" Text
    Then I see "No ingredients" in the page
    When I click on the "Image" Text
    Then I do not see "No ingredients" in the page

  @core
  Scenario: Check only ingredient causes all its Section to be closed
    Given System loads Detail Page data
    And I visit "detail/1" Page
    When I click on the "Ingredients" Text
    And I click on the "1 unit Ingredient A" Text
    Then I do not see "1 unit Ingredient A" in the page
    When I click on the "Section 1" Text
    Then I see "1 unit Ingredient A" in the page

  @core
  Scenario: Change to alternative ingredient and back
    Given System loads Detail Page data
    And I visit "detail/1" Page
    When I click on the "Ingredients" Text
    Then I see "1 unit Ingredient A" in the page
    When I click on the "iconButton" Button
    Then I see "1 unit Alternative A" in the page
    When I click on the "iconButton" Button
    Then I see "1 unit Ingredient A" in the page

  Scenario: Close ingredient section and open it
    Given System loads Detail Page data
    And I visit "detail/1" Page
    When I click on the "Ingredients" Text
    Then I see "1 unit Ingredient A" in the page
    When I click on the "Section 1" Text
    Then I do not see "1 unit Ingredient A" in the page
    When I click on the "Section 1" Text
    Then I see "1 unit Ingredient A" in the page
