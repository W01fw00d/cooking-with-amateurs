Feature: On About Page

  Scenario: Go back to Home Page
    Given System loads About and List Page data
    And I visit "About" Page
    Then I see "about" in the page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    And I see "Fideuà" in the page
