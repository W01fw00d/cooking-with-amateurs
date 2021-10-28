Feature: On List Page

  Scenario: Recipes images are lazy loading
    Given System loads List Page data
    And System will load Recipes with images
    And I visit "list" Page
    When I wait 500 milliseconds
    Then I see "difficulty" in the page
    And Last image is not called
    When I scroll to the bottom of the page
    And I wait 500 milliseconds
    Then Last image is called
