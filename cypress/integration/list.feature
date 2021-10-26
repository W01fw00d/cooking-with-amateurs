Feature: On List Page

  @core
  Scenario: Be redirected to List page from root
    Given System loads List Page only
    And System will load Recipes that will show their name
    And I visit "" Page
    Then I am redirected to "List" Page
    Then I see "Fideuà" in the page

  @core
  Scenario: See the recipes names
    Given System loads List Page only
    And System will load Recipes that will show their name
    And I visit "list" Page
    Then I see "Fideuà" in the page
    And I see "Risotto" in the page

  @core
  Scenario: Click the first recipe details link
    Given System loads List and Detail Page
    And System will load Recipes that will show their name
    And I visit "list" Page
    When I click on the "Fideuà" Text
    Then I am redirected to "detail/1" Page
    And I see "Fideuà" in the page

  @core
  Scenario: Open drawer side menu and click in About link to be redirected
    Given System loads List and About Page
    And System will load random Recipes
    And I visit "list" Page
    When I click on the "drawerButton" Button
    Then I see "about" in the screen
    When I click on the "about" Text
    Then I am redirected to "about" Page
    And I see "about" in the page

  Scenario: Write on search text input
    Given System loads List Page only
    And System will load random Recipes
    And I visit "list" Page
    When I write "text" on the "search" Input
    Then I see "text" on the "search" Input

  Scenario: Do not see the recipes names if they are disabled
    Given System loads List Page only
    And System will load Recipes that will not show their name
    And I visit "list" Page
    When I wait 500 milliseconds
    Then I see "difficulty" in the page
    And I do not see "Fideuà" in the page
    And I do not see "Risotto" in the page
