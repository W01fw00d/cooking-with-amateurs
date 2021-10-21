Feature: On List Page

  @core
  Scenario: See the recipes names
    Given Recipes will show their name
    Given I visit "list" Page
    Then I see "Fideuà" in the page
    Then I see "Risotto" in the page

  @core
  Scenario: Click the first recipe details link
    Given Recipes will show their name
    Given I visit "list" Page
    When I click on the "Fideuà" Text
    Then I am redirected to "detail/1" Page

  Scenario: Do not see the recipes names if they are disabled
    Given Recipes will not show their name
    Given I visit "list" Page
    When I wait 500 milliseconds
    Then I do see "difficulty" in the page root
    Then I do not see "Fideuà" in the page root
    Then I do not see "Risotto" in the page root

  Scenario: Write on search text input
    Given Recipes will show their name
    Given I visit "list" Page
    When I write "text" on the "search" Input
    Then I see "text" on the "search" Input
