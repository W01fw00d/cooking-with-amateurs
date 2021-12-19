Feature: On List Page

  Scenario: Change language
    Given System will load Recipes that will show their name
    And I visit "list" Page
    Then I see "Literal A" in the page
    And I see "Recipe A" in the page
    When I click on the "drawerButton" Button
    Then I see the Drawer Panel
    Then I see "Language A" in the Drawer Panel
    When I select "Language B" Option in the "Language A" Select
    Then I see "Language B" in the Drawer Panel
    When I close the Drawer Panel
    Then I do not see the Drawer Panel
    And I see "Literal B" in the page
    And I see "Recipe B" in the page
