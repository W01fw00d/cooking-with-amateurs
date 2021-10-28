Feature: On List Page

  @core
  Scenario: Be redirected to List page from root
    Given System will load Recipes that will show their name
    And I visit "" Page
    Then I am redirected to "List" Page
    Then I see "Fideuà" in the page

  @core
  Scenario: See the recipes names
    Given System will load Recipes that will show their name
    And I visit "list" Page
    Then I see "Fideuà" in the page
    And I see "Risotto" in the page

  Scenario: Write on search text input
    Given System will load random Recipes
    And I visit "list" Page
    When I write "text" on the "search" Input
    Then I see "text" on the "search" Input

  Scenario: Do not see the recipes names if they are disabled
    Given System will load Recipes that will not show their name
    And I visit "list" Page
    When I wait 500 milliseconds
    Then I see "difficulty" in the page
    And I do not see "Fideuà" in the page
    And I do not see "Risotto" in the page

  # TODO: Scenario: Change language
