Feature: On List Page

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
