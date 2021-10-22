Feature: On List Page

  @core
  Scenario: Be redirected to List page from root
    Given Recipes will show their name
    Given I visit "" Page
    Then I am redirected to "List" Page
    Then I see "Fideuà" in the page

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
    # TODO: setStub for Detail Page, so it's not displayed blank

  @core
  Scenario: Open drawer side menu and click in About link to be redirected
    # TODO: refactor, could use a generic Given that sets random recipes
    Given Recipes will show their name
    Given I visit "list" Page
    When I click on the "drawerButton" Button
    Then I see "about" in the page
    # TODO: setStub for About Page, also create a feature for About Page
    # When I click on the "about" Text
    # Then I am redirected to "about" Page

  Scenario: Write on search text input
    # TODO: refactor, could use a generic Given that sets random recipes
    Given Recipes will show their name
    Given I visit "list" Page
    When I write "text" on the "search" Input
    Then I see "text" on the "search" Input

  Scenario: Do not see the recipes names if they are disabled
    Given Recipes will not show their name
    Given I visit "list" Page
    When I wait 500 milliseconds
    Then I do see "difficulty" in the page root
    Then I do not see "Fideuà" in the page root
    Then I do not see "Risotto" in the page root
