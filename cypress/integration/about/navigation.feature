Feature: On About Page

  Scenario: Go back to Home Page
    Given System loads About and List Page data
    And I visit "About" Page
    Then I see "about" in the page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    And I see "Fideuà" in the page

  Scenario: Check that Logo opens a new tab to Project's Code Repository Page
    Given System loads About and List Page data
    And I visit "About" Page
    Then I see "about" in the page
    And System checks that "projectUrl" Button opens a new tab with "https://www.google.com/search?q=code+repository" url

  Scenario: Check that Author's name opens a new tab to their CV Page
    Given System loads About and List Page data
    And I visit "About" Page
    Then I see "about" in the page
    And System checks that "authorUrl" Button opens a new tab with "https://www.google.com/search?q=cv" url
